import React, {useEffect, useState} from "react";
import {Button, Card, Col, DatePicker, Divider, Form, InputNumber, message, Row} from "antd";
import {addBook, editBook, getOrders, getOrdersInRange} from "../service/dataService";
import {Link, useSearchParams} from "react-router-dom";

export default function Statistics() {

    const [order, setOrder] = useState([]);

    const [price, setPrice] = useState(0);

    const [cnt, setCnt] = useState(0);

    useEffect(()=> {
        let user_id = localStorage.getItem("user_id");
        getOrdersInRange(user_id, start, end, (data) => {
            let tmp_order_list = [];
            let tmp_price = 0;
            let tmp_cnt = 0;
            data.map(item => {
                let order_item = {
                    order_id: item.id,
                    price: item.price,
                    time: item.time
                }
                tmp_order_list.push(order_item)
                tmp_price += item.price;
                tmp_cnt++
            })
            setOrder(tmp_order_list)
            setPrice(tmp_price)
            setCnt(tmp_cnt)
            if (tmp_order_list.length === 0)
                message.warn("当前没有订单，快去消费吧！")
        })
    }, [])

    const [params] = useSearchParams();
    const start = params.get("start")
    const end = params.get("end")

    return (
        <div>
            <h1 style={{marginLeft:250, fontSize:40}}>我的订单({start} ~ {end})</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        order.map(item=>(
                            <Col span={8}>
                                <Link to={`/orderItem/?order_id=${item.order_id}`}>
                                    <Card title={"订单编号：" + item.order_id} style={{ width: 300 }}>
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

            <h1 style={{marginLeft:450, fontSize:40}}>数据统计：</h1>

            <h2 style={{marginLeft: 200}}>该时间段内消费次数为：{cnt} 次 / 购买书籍总金额为：{price} RMB</h2>

            <Divider />

            <Link to={`/statDetail/?start=${start}&end=${end}`}>
            <Button type="primary" style={{width:400,marginLeft:300, height:50}}>
                查看详细消费信息
            </Button>
            </Link>
        </div>
    )
}
