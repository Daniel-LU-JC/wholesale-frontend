import React, {Component, useEffect, useState} from 'react';
import {Badge, Button, Card, Col, Divider, Row} from 'antd';
import "../css/base.less";
import Search_bar from "../components/Search_bar";
import title_img from "../assets/title07.png";
import { BackTop } from 'antd';
import {Link} from "react-router-dom";
import {getBooksByType, test} from "../service/dataService";

const { Meta } = Card;

export default function Details3() {

    const [type3, setType3] = useState([]);

    const getBooks = () => {
        getBooksByType("武侠小说", (data) => {
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
            setType3(tmp_books);
        });
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <div>
            <img src={title_img} alt="" className="title0"/>
            <Divider />

            <div className='grid'>
                <Row gutter={16}>
                    {
                        type3.map(item=>(
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

            <Divider />

            <BackTop />
        </div>
    )
}
