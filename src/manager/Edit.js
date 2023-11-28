import React, {Component, useEffect, useState} from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import {Button, Descriptions, Divider, Form, Image, Input, message, Radio} from "antd";
import {addBook, addToCart, checkAuth, editBook, getBooksAll} from "../service/dataService";

const { Search } = Input;

export default function Add() {

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

    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [inventory, setInventory] = useState("");
    const [url, setUrl] = useState("");

    const navigate = useNavigate();

    return (
        <div id="disc">

            <h1 style={{marginLeft:400, fontSize:40}}>编辑书籍信息：</h1>

            <h2>请书籍 ISBN ：{findResult.isbn}</h2>

            <h2 style={{marginTop: 30}}>书籍名字：{findResult.name}</h2>

            <h2 style={{marginTop: 30}}>书籍类型：{findResult.type}</h2>

            <h2 style={{marginTop: 30}}>书籍作者：{findResult.author}</h2>

            <h2 style={{marginTop: 30}}>书籍价格：{findResult.price}</h2>

            <Search
                placeholder="请输入书籍价格"
                allowClear
                enterButton="确定书籍价格"
                size="large"
                onSearch={(value) => {setPrice(value); message.success("已录入书籍价格")}}
            />

            <h2 style={{marginTop: 30}}>书籍介绍信息：{findResult.description}</h2>

            <Search
                placeholder="请输入书籍介绍信息"
                allowClear
                enterButton="确定书籍介绍信息"
                size="large"
                onSearch={(value) => {setDesc(value); message.success("已录入书籍信息")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍库存量：{findResult.inventory}</h2>

            <Search
                placeholder="请输入书籍库存量"
                allowClear
                enterButton="确定书籍库存量"
                size="large"
                onSearch={(value) => {setInventory(value); message.success("已录入库存量")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍图片 URL ：{findResult.image}</h2>

            <Search
                placeholder="请输入书籍图片 URL"
                allowClear
                enterButton="确定书籍图片"
                size="large"
                onSearch={(value) => {setUrl(value); message.success("已录入书籍图片")}}
            />

            <Button type="primary" style={{width:500, height: 50, marginLeft:250, marginTop:50}} onClick={() => {
                message.success("已经成功修改书籍信息")
                setTimeout(()=>navigate('/manage/books'), 1000);
                // addBook("10", "Java编程思想", "编程", "Bruce Eckel", "91", "Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。", "9096", "http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg")
                // addBook(isbn, title, type, author, price, desc, inventory, url)
                editBook(findResult.id, findResult.isbn, findResult.name, findResult.type, findResult.author, price, desc, inventory, url);
            }}>确定更新该书籍信息</Button>

        </div>
    );
}
