import React, {useEffect, useState} from 'react';
import {Table, Tag, Space, Button, message, Divider, InputNumber, Row, Col, Card} from 'antd';
import {changeNumber, getCartById, makeOrderList} from "../service/dataService";
import {Volumes, Delete} from "../components/Volumes";
import {Link, useNavigate} from "react-router-dom";

import {createWebSocket, closeWebSocket} from "../service/WebSocket";

const { Meta } = Card;

export default function MyCart(){

    const [cart, setCart] = useState([]);

    useEffect(()=> {
        let user_id = localStorage.getItem("user_id")

        createWebSocket("ws://localhost:8080/websocket/transfer/" + user_id)

        getCartById(user_id, (data) => {
            let tmp_cart_books = [];
            data.map(item => {
                let book_item = {
                    id: item.id,
                    name: item.book_name,
                    price: item.price,
                    number: item.number,
                    tags: item.type
                }
                tmp_cart_books.push(book_item);
            })
            setCart(tmp_cart_books);
            if (tmp_cart_books.length === 0)
                message.warn("购物车为空，快去购买吧！")
        })

        return ()=>{
            closeWebSocket()
        }
    }, [])

    const navigate = useNavigate();
    const money = () => {
        let total_money = 0;
        cart.map(item => {
            total_money  = total_money + item.price * item.number;
        })
        message.success("您当前购物的总价钱为：" + total_money.toFixed(2) + " 元")
    }

    const makeOrder = () => {
        if (cart.length ===0) {
            message.success("购物车为空！")
        }
        else {
            message.success("已为您生成订单！")
            let user_id = localStorage.getItem("user_id")
            let total_money = 0;
            cart.map(item => {
                total_money = total_money + item.price * item.number;
            })
            let d = new Date();
            let year = d.getFullYear();
            let date = d.getDate();
            let month = d.getMonth() + 1;
            if (month < 10)
                month = "0" + month;
            if (date < 10)
                date = "0" + date;
            let time = year + "-" + month + "-" + date;
            makeOrderList(user_id, total_money, time);

            message.success("请稍等，商家正在确认中...")
            message.success("订单已经成功被商家处理，正在跳转...")
            setTimeout(() => navigate('/order'), 500);
        }
    }

    return (
        <div>

            <h1 style={{marginLeft:400, fontSize:40}}>我的购物车</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        cart.map(item=>(
                            <Col span={8}>
                                <Card title={item.name} extra={<a href={`/display/?id=${item.id}`}>具体信息</a>} style={{ width: 300 }}>
                                    <p>单价：{item.price}</p>
                                    <p>购买数量：{<Volumes record={item} />}</p>
                                    <p>类型：{item.tags}</p>
                                </Card>
                                <Delete record={item}/>
                                <Divider />
                            </Col>
                        ))
                    }
                </Row>
            </div>

            <Divider />

            <div>
                <Button type="primary" onClick={money} style={{width:350, height:50, marginLeft:50}}>计算总价钱</Button>
                <Button type="primary" onClick={makeOrder} style={{width:350, height:50, marginLeft:150}}>生成订单</Button>
            </div>
        </div>
    );
};
