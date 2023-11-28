import React, {useEffect, useState} from "react";
import {Button, Card, Col, DatePicker, Divider, Form, InputNumber, message, Row} from "antd";
import {getOrders} from "../service/dataService";
import {Link} from "react-router-dom";
import books from "./information";

export default function SearchBooks() {

    const [order, setOrder] = useState([]);

    return (
        <div>
            <h1 style={{marginLeft:350, fontSize:40}}>满足搜索条件的书籍</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        order.map(item=>(
                            <Col span={8}>
                                <Link to={`/orderItem/?order_id=${item.id}`}>
                                    <Card title={"书籍编号：" + item.id} style={{ width: 300 }}>
                                        <p>书籍名称：{item.name}</p>
                                        <p>书籍作者：{item.author}</p>
                                        <p>书籍简介：{item.description}</p>
                                    </Card>
                                    <Divider />
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    )
}
