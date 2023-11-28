import React, {useEffect, useState} from "react";
import {Button, Card, Col, Divider, Row} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {getBooksByType} from "../service/dataService";

const { Meta } = Card;

export default function Confirm() {

    const [type1, setType1] = useState([]);

    const getBooks = () => {
        getBooksByType("编程", (data) => {
            let tmp_books = [];
            data.map(item => {
                let book_item = {
                    id: item.id,
                    title: item.book_name,
                    img: item.image,
                    desc: item.description
                }
                tmp_books.push(book_item);
            })
            setType1(tmp_books);
        });
    }

    useEffect(() => {
        getBooks();
    }, [])

    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(()=>navigate('/cart'), 500);
    }

    return (
        <div>
            <Button type="primary" style={{width:500, height:50, marginLeft:250}} onClick={handleClick}>直接返回购物车</Button>

            <Divider/>

            <h1 style={{fontSize:40}}>
                更多好书为您推荐...
            </h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        type1.map(item=>(
                            <Col span={8}>
                                <Link to={`/display/?id=${item.id}`}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={item.img} />}
                                    >
                                        <Meta title={item.title} description={item.desc} />
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    )
}
