import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getBooksByOrder} from "../service/dataService";
import {Card, Col, Divider, Row} from "antd";

export default function OrderItem() {

    const [params] = useSearchParams();
    const id = params.get("order_id");

    const [order, setOrder] = useState([]);

    const [price, setPrice] = useState(0)

    useEffect(()=>{
        getBooksByOrder(id, (data)=>{
            let total_price = 0;
            let order_books = []
            data.map(item => {
                let book_item = {
                    id: item.id,
                    name: item.book_name,
                    price: item.price,
                    number: item.number,
                    tags: item.type
                }
                order_books.push(book_item)
                total_price = total_price + book_item.price *  book_item.number;
                setPrice(total_price.toFixed(2))
            })
            setOrder(order_books)
        })
    }, [])

    return (
        <div>
            <h1 style={{marginLeft:400, fontSize:40}}>订单 {id} 详情</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        order.map(item=>(
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

            <h1>您的本次消费总金额为：{price}元</h1>
        </div>
    )
}
