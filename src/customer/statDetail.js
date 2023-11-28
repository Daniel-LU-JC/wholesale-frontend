import React, {useEffect, useState} from "react";
import {Button, Card, Col, DatePicker, Divider, Form, InputNumber, message, Row} from "antd";
import {getBooksByOrder, getBooksInRange, getOrdersInRange} from "../service/dataService";
import {Link, useSearchParams} from "react-router-dom";

export default function StatDetail() {

    const [book, setBook] = useState([])

    const [cnt, setCnt] = useState(0);

    useEffect(()=> {
        let user_id = localStorage.getItem("user_id");

        getBooksInRange(user_id, start, end, (data) => {
            let order_books = []
            let count = 0
            data.map(item => {
                let book_item = {
                    id: item.id,
                    name: item.book_name,
                    price: item.price,
                    number: item.number,
                    tags: item.type
                }
                count += item.number
                order_books.push(book_item)
            })
            setBook(order_books)
            setCnt(count)
        })
    }, [])

    const [params] = useSearchParams();
    const start = params.get("start")
    const end = params.get("end")

    return (
        <div>
            <h1 style={{marginLeft:230, fontSize:40}}>购买书籍详情({start} ~ {end})</h1>

            <Divider />

            <h2>您在该时间段内一共购买了 {cnt} 本书</h2>

            <Divider />

            <div className='grid'>
                <Row gutter={16}>
                    {
                        book.map(item=>(
                            <Col span={8}>
                                <Card title={item.name} extra={<a href={`/display/?id=${item.id}`}>具体信息</a>} style={{ width: 300 }}>
                                    <p>购买书籍单价：{item.price} RMB</p>
                                    <p>购买书籍数量：{item.number} 本</p>
                                    <p>购买书籍类型：{item.tags}</p>
                                </Card>
                                <Divider />
                            </Col>
                        ))
                    }
                </Row>
            </div>

            <Divider />

        </div>

    )
}
