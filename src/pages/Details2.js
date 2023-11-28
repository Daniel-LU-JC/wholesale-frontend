import React, {Component, useEffect, useState} from 'react';
import {Card, Col, Divider, Row} from 'antd';
import "../css/base.less";
import Search_bar from "../components/Search_bar";
import title_img from "../assets/title06.png";
import { BackTop } from 'antd';
import {Link} from "react-router-dom";
import {getBooksByType} from "../service/dataService";

const { Meta } = Card;

export default function Details2() {

    const [type2, setType2] = useState([]);

    const getBooks = () => {
        getBooksByType("世界名著", (data) => {
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
            setType2(tmp_books);
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
                        type2.map(item=>(
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
    );
};
