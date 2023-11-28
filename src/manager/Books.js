import React, {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {changeState, deleteBook, getBooksByOrder, getBooksByType, getUsersAll} from "../service/dataService";
import {Button, Card, Col, Divider, message, Row} from "antd";
import Search_bar from "../components/Search_bar";
import Search_bar2 from "../components/Search_bar2";

export default function Books() {

    const [type1, setType1] = useState([]);
    const [type2, setType2] = useState([]);
    const [type3, setType3] = useState([]);

    useEffect(()=>{

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

        getBooksByType("武侠小说", (data) => {
            let tmp_books = [];
            data.map(item => {
                let book_item = {
                    id: item.id,
                    title: item.book_name,
                    price: item.price,
                    img: item.image,
                    desc: item.description
                }
                tmp_books.push(book_item);
            })
            setType3(tmp_books);
        });

    }, [])

    return (
        <div>

            <Search_bar2 />

            <Divider />

            <h1 style={{marginLeft:400, fontSize:40}}>编程书籍：</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        type1.map(item=> {
                                return (
                                    <Col span={8}>
                                        <Card title={"书籍 ID : " + item.id} style={{ width: 300 }}>
                                            <p>书籍名：{item.title}</p>
                                            <Link to={`/manage/display/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}}>查看书籍详情</Button>
                                            </Link>
                                            <Link to={`/manage/edit/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}} onClick={() => {

                                            }}>编辑书籍信息</Button>
                                            </Link>
                                            <Link to={`/manage/confirm/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}} onClick={() => {
                                            }}>删除当前书籍</Button>
                                        </Link>
                                        </Card>
                                        <Divider />
                                    </Col>
                                )
                        })
                    }
                </Row>
            </div>

            <h1 style={{marginLeft:400, fontSize:40}}>世界名著：</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        type2.map(item=> {
                            return (
                                <Col span={8}>
                                    <Card title={"书籍 ID : " + item.id} style={{ width: 300 }}>
                                        <p>书籍名：{item.title}</p>
                                        <Link to={`/manage/display/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}}>查看书籍详情</Button>
                                        </Link>
                                        <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}} onClick={() => {

                                        }}>编辑书籍信息</Button>
                                        <Link to={`/manage/confirm/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}} onClick={() => {
                                            }}>删除当前书籍</Button>
                                        </Link>
                                    </Card>
                                    <Divider />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>

            <h1 style={{marginLeft:400, fontSize:40}}>武侠小说：</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        type3.map(item=> {
                            return (
                                <Col span={8}>
                                    <Card title={"书籍 ID : " + item.id} style={{ width: 300 }}>
                                        <p>书籍名：{item.title}</p>
                                        <Link to={`/manage/display/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}}>查看书籍详情</Button>
                                        </Link>
                                        <Link to={`/manage/edit/?id=${item.id}`}>
                                        <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}} onClick={() => {

                                        }}>编辑书籍信息</Button>
                                        </Link>
                                        <Link to={`/manage/confirm/?id=${item.id}`}>
                                            <Button type="primary" style={{width:200, marginLeft:30, marginTop:20}} onClick={() => {
                                            }}>删除当前书籍</Button>
                                        </Link>
                                    </Card>
                                    <Divider />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>

            <h1 style={{marginLeft:400, fontSize:40}}>新增书籍：</h1>

            <Link to={`/manage/addBook`}>
            <Button type="primary" style={{width:500, height: 50, marginLeft:250}} >输入书籍信息</Button>
            </Link>
        </div>
    )
}
