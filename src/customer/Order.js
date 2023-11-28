import React, {useEffect, useState} from "react";
import {Button, Card, Col, DatePicker, Divider, Form, InputNumber, message, Row} from "antd";
import {getOrders} from "../service/dataService";
import {Link} from "react-router-dom";

export default function Order() {

    const [val, setVal] = useState(1);

    const [order, setOrder] = useState([]);

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    useEffect(()=> {
        let user_id = localStorage.getItem("user_id");
        getOrders(user_id, (data)=>{
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
            if (tmp_order_list.length === 0)
                message.warn("当前没有订单，快去消费吧！")
        })
    }, [])

    let onFinish = (fieldsvalue) => {
        const value = {
            'start': fieldsvalue['start'].format('YYYY-MM-DD'),
            'end': fieldsvalue['end'].format('YYYY-MM-DD')
        }

        // 下面通过发送 ajax 请求获得目标时间段内的所有订单

        setStart(value.start)
        setEnd(value.end)

        message.success("时间范围设置为 " + value.start + "~" + value.end)

    }

    return (
        <div>
            <h1 style={{marginLeft:400, fontSize:40}}>我的订单</h1>

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

            <h1 style={{marginLeft:450, fontSize:40}}>订单搜索：</h1>

            <h2>查找含有以下书籍 ID 的订单：     <InputNumber min={1} max={10} onChange={(value: number)=>{
                setVal(value);
            }} />
                <Link to={`/searchOrder?id=${val}`}>
                    <Button type="primary" style={{marginLeft: 100, width:200}} onClick={()=>{
                        message.success("正在为您寻找订单...")
                    }}>开始查找</Button>
                </Link>
            </h2>

            <Divider />
            <Divider />
            <Divider />

            <h1 style={{marginLeft:450, fontSize:40}}>信息统计：</h1>

            <h2 style={{marginBottom:40}}>统计在以下时间范围内购买书籍的情况：</h2>

            <Form layout="inline" onFinish={onFinish}>
                <Form.Item label="开始日期" name="start">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="结束日期" name="end">
                    <DatePicker />
                </Form.Item>
                <Button type="default" style={{marginLeft: 100, width:200}} htmlType="submit">设置时间范围</Button>
            </Form>

            <Divider />

            <Link to={`/statistics/?start=${start}&end=${end}`}>
            <Button type="primary" style={{width:500, height: 50, marginLeft:250, marginTop:50}}>开始统计</Button>
            </Link>

        </div>
    )
}
