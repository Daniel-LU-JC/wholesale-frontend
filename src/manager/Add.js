import React, {Component, useEffect, useState} from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import {Button, Descriptions, Divider, Form, Image, Input, message, Radio} from "antd";
import {addBook, addToCart, checkAuth, getBooksAll} from "../service/dataService";

const { Search } = Input;

export default function Add() {

    const [isbn, setIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [inventory, setInventory] = useState("");
    const [url, setUrl] = useState("");

    const navigate = useNavigate();

    return (
        <div id="disc">

            <h1 style={{marginLeft:400, fontSize:40}}>新增书籍：</h1>

            <h2>请输入书籍 ISBN ：</h2>

            <Search
                placeholder="请输入书籍 ISBN"
                allowClear
                enterButton="确定 ISBN"
                size="large"
                onSearch={(value) => {setIsbn(value); message.success("已录入 ISBN")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍名字：</h2>

            <Search
                placeholder="请输入书名"
                allowClear
                enterButton="确定书名"
                size="large"
                onSearch={(value) => {setTitle(value); message.success("已录入书名")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍类型：</h2>

            <Search
                placeholder="请输入书籍类型"
                allowClear
                enterButton="确定书籍类型"
                size="large"
                onSearch={(value) => {setType(value); message.success("已录入书籍类型")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍作者：</h2>

            <Search
                placeholder="请输入书籍作者"
                allowClear
                enterButton="确定书籍作者"
                size="large"
                onSearch={(value) => {setAuthor(value); message.success("已录入书籍作者")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍价格：</h2>

            <Search
                placeholder="请输入书籍价格"
                allowClear
                enterButton="确定书籍价格"
                size="large"
                onSearch={(value) => {setPrice(value); message.success("已录入书籍价格")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍介绍信息：</h2>

            <Search
                placeholder="请输入书籍介绍信息"
                allowClear
                enterButton="确定书籍介绍信息"
                size="large"
                onSearch={(value) => {setDesc(value); message.success("已录入书籍信息")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍库存量：</h2>

            <Search
                placeholder="请输入书籍库存量"
                allowClear
                enterButton="确定书籍库存量"
                size="large"
                onSearch={(value) => {setInventory(value); message.success("已录入库存量")}}
            />

            <h2 style={{marginTop: 30}}>请输入书籍图片 URL ：</h2>

            <Search
                placeholder="请输入书籍图片 URL"
                allowClear
                enterButton="确定书籍图片"
                size="large"
                onSearch={(value) => {setUrl(value); message.success("已录入书籍图片")}}
            />

            <Button type="primary" style={{width:500, height: 50, marginLeft:250, marginTop:50}} onClick={() => {
                message.success("已经成功添加书籍")
                setTimeout(()=>navigate('/manage/books'), 1000);
                // addBook("10", "Java编程思想", "编程", "Bruce Eckel", "91", "Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。", "9096", "http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg")
                addBook(isbn, title, type, author, price, desc, inventory, url)
            }}>确定增加该书籍</Button>

        </div>
    );
}
