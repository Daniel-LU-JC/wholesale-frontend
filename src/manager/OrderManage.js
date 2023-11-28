import React, {Component, useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom"
import {Button, Card, Col, Descriptions, Divider, Form, Image, Input, InputNumber, message, Radio, Row} from "antd";
import {addToCart, checkAuth, getBooksAll, getOrders, getOrdersAll} from "../service/dataService";

export default function OrderManage() {

    const [order, setOrder] = useState([]);

    const [val, setVal] = useState(1);

    useEffect(()=> {
        getOrdersAll((data)=>{
            let tmp_order_list = [];
            data.map(item => {
                let order_item = {
                    user_id: item.user_id,
                    order_id: item.id,
                    price: item.price,
                    time: item.time
                }
                tmp_order_list.push(order_item)
            })
            setOrder(tmp_order_list)
        })
    }, [])

    return (
        <div id="disc">

            <h1 style={{marginLeft:400, fontSize:40}}>系统所有订单：</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        order.map(item=>(
                            <Col span={8}>
                                <Link to={`/manage/orderItem/?order_id=${item.order_id}`}>
                                    <Card title={"订单编号：" + item.order_id} style={{ width: 300 }}>
                                        <p>用户 ID : {item.user_id}</p>
                                        <p>订单消费：{item.price}</p>
                                        <p>订单时间：{item.time}</p>
                                        <p>点击订单可查看消费详情</p>
                                    </Card>
                                    <Divider />
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </div>

            <h1 style={{marginLeft:450, fontSize:40}}>订单搜索：</h1>

            <h2>查找含有以下书籍 ID 的订单：     <InputNumber min={1} max={10} onChange={(value: number)=>{
                setVal(value);
            }} />
                <Link to={`/manage/findOrder?id=${val}`}>
            <Button type="primary" style={{marginLeft: 100, width:200}} onClick={()=>{
                message.success("正在为您寻找订单...")
            }}>开始查找</Button>
                </Link>
            </h2>

            <Divider />

        </div>
    );
}
