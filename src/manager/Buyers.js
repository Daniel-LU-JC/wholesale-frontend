import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import {getUsersRanking} from "../service/dataService";
import {Divider, Table} from "antd";

export default function Buyers() {

    const [params] = useSearchParams();
    const start = params.get("start")
    const end = params.get("end")

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsersRanking(start, end, (data) => {
            let users_money = []
            let ranking = 1;
            data.map(item => {
                let user_item = {
                    user_id: item.id,
                    user_name: item.user_name,
                    user_password: item.user_password,
                    identity: item.identity,
                    email: item.email,
                    address: item.address,
                    state: item.state,
                    money: item.money,
                    ranking: ranking
                }
                users_money.push(user_item)
                ranking++;
            })
            setUsers(users_money);
        })
    }, [])

    const columns = [
        {
            title: '购买排名',
            dataIndex: 'ranking',
            key: 'ranking'
        },
        {
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: '用户地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '购买金额',
            dataIndex: 'money',
            key: 'money',
        },
    ];

    return (
        <div>

            <h1 style={{marginLeft: 350}}>消费榜：{start} ~ {end}</h1>

            <Divider />

            <Table dataSource={users} columns={columns} />

            <Divider />

        </div>
    )
}
