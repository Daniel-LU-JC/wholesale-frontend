import React, {Component, useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom"
import {Button, Card, Col, Descriptions, Divider, Form, Image, Input, InputNumber, message, Radio, Row} from "antd";
import {getOrders, getOrdersByBook} from "../service/dataService";

export default function SearchOrder() {

    const [order, setOrder] = useState([]);

    const [params] = useSearchParams();
    const id = params.get("id");

    useEffect(()=> {
        let user_id = localStorage.getItem("user_id")
        getOrdersByBook(user_id, id, (data) => {
            let tmp_order_list = [];
            data.map(item => {
                let order_item = {
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

            <h1 style={{marginLeft:400, fontSize:40}}>符合条件的订单：</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        order.map(item=> {
                                return (
                                    <Col span={8}>
                                        <Link to={`/orderItem/?order_id=${item.order_id}`}>
                                            <Card title={"订单编号：" + item.order_id} style={{ width: 300 }}>
                                                <p>用户 ID : 1</p>
                                                <p>订单消费：{item.price}</p>
                                                <p>订单时间：{item.time}</p>
                                                <p>点击订单可查看消费详情</p>
                                            </Card>
                                            <Divider />
                                        </Link>
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
            </div>
        </div>
    );
}
