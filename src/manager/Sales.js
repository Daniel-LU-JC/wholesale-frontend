import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import {getAllBooksInRange, getBooksInRange} from "../service/dataService";
import {Card, Col, Divider, Row, Table} from "antd";

export default function Sales() {

    const [params] = useSearchParams();
    const start = params.get("start")
    const end = params.get("end")

    const [book, setBook] = useState([])

    useEffect(()=> {
        getAllBooksInRange(start, end, (data) => {
            let order_books = []
            let ranking = 1;
            data.map(item => {
                let book_item = {
                    id: item.id,
                    name: item.book_name,
                    price: item.price,
                    number: item.number,
                    tags: item.type,
                    revenue: item.number * item.price,
                    ranking: ranking
                }
                order_books.push(book_item)
                ranking++;
            })
            setBook(order_books)
        })
    }, [])

    const columns = [
        {
            title: '销售排名',
            dataIndex: 'ranking',
            key: 'ranking'
        },
        {
            title: '书名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '销售量',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '销售金额',
            dataIndex: 'revenue',
            key: 'revenue',
        },
    ];

    return (
        <div>

            <h1 style={{marginLeft: 350}}>热销榜：{start} ~ {end}</h1>

            <Divider />

            <Table dataSource={book} columns={columns} />

            <Divider />

        </div>
    )
}
