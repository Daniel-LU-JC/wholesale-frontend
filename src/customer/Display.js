import React, {Component, useEffect, useState} from 'react';
import { useSearchParams } from "react-router-dom"
import {Button, Descriptions, Divider, Image, message} from "antd";
import '../css/page.less'
import {addToCart, getBooksAll} from "../service/dataService";

const button1 = () => {
    message.success('已成功加入购物车');
    let user_id = localStorage.getItem("user_id")
    let book_id = localStorage.getItem("cur_book_id")
    addToCart(user_id, book_id);
}

export default function Display() {

    const [books, setBooks] = useState([]);

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

            <Divider />

            <Button type="primary" onClick={button1} style={{width:400,marginLeft:300, height:50}}>
                加入购物车
            </Button>
        </div>
    );
}
