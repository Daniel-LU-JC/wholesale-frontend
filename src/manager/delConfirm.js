import React, {Component, useEffect, useState} from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import {Button, Descriptions, Divider, Image, message} from "antd";
import '../css/page.less';
import {addToCart, deleteBook, getBooksAll} from "../service/dataService";

const button1 = () => {
    message.success('已成功加入购物车');
    let user_id = localStorage.getItem("user_id")
    let book_id = localStorage.getItem("cur_book_id")
    addToCart(user_id, book_id);
}

export default function DelConfirm() {

    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getBooksAll((data) => {
            let tmp_books = [];
            data.map(item => {
                let book_item = {
                    id: item.id,
                    isbn: item.isbn,
                    name: item.book_name,
                    type: item.type,
                    author: item.author,
                    price: item.price,
                    description: item.description,
                    inventory: item.inventory,
                    image: item.image
                }
                tmp_books.push(book_item);
            })
            setBooks(tmp_books);
        })
    }, [])

    const [params] = useSearchParams();
    const id = params.get("id");

    const findResult = books.find((infoObj)=>{
        if (infoObj.id === parseInt(id)) {
            localStorage.setItem("cur_book_id", infoObj.id)
        }
        return infoObj.id === parseInt(id)
    }) || {}

    return (
        <div id="disc">
            <h1>您是否确定删除当前书籍？</h1>
            <Image
                width={350}
                src={findResult.image}
                id='book1'
            />

            <Descriptions
                title="具体信息"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="书名">{findResult.name}</Descriptions.Item>
                <Descriptions.Item label="ISBN">{findResult.isbn}</Descriptions.Item>
                <Descriptions.Item label="类型">{findResult.type}</Descriptions.Item>
                <Descriptions.Item label="作者">{findResult.author}</Descriptions.Item>
                <Descriptions.Item label="库存">{findResult.inventory}</Descriptions.Item>
                <Descriptions.Item label="价格">{findResult.price}</Descriptions.Item>
                <Descriptions.Item label="简介">
                    {findResult.description}
                </Descriptions.Item>
            </Descriptions>

            <Button type="primary" size="large" style={{marginLeft:400, marginTop:50, width:300}} onClick={() => {
                message.success("已删除当前书籍")
                deleteBook(findResult.id)
                setTimeout(()=>navigate('/manage/books'), 1000);
            }}>确定删除当前书籍</Button>

        </div>
    );
}
