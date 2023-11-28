import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {changeState, getBooksByOrder, getUsersAll} from "../service/dataService";
import {Button, Card, Col, Divider, message, Row} from "antd";

export default function Users() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{

        getUsersAll((data) => {
            let users_tmp = [];
            data.map(item => {
                let one_user = {
                    user_id: item.id,
                    user_name: item.user_name,
                    user_password: item.user_password,
                    identity: item.identity,
                    email: item.email,
                    address: item.address,
                    state: item.state
                }
                users_tmp.push(one_user);
            })
            setUsers(users_tmp)
        })

    }, [])

    return (
        <div>
            <h1 style={{marginLeft:400, fontSize:40}}>系统所有用户：</h1>

            <div className='grid'>
                <Row gutter={16}>
                    {
                        users.map(item=> {
                            if (item.identity === "customer")
                                return (
                                    <Col span={8}>
                                        <Card title={"用户 ID : " + item.user_id + ((item.state==="0") ? "（已禁用）" : "")} style={{ width: 300 }}>
                                            <p>用户名：{item.user_name}</p>
                                            <p>联系方式：{item.email}</p>
                                            <p>联系地址：{item.address}</p>
                                            <Button type="primary" style={{width:200, marginLeft:30}} onClick={() => {
                                                if (item.state === "1") {
                                                    message.success("已经成功禁用账号 " + item.user_id)
                                                }
                                                else {
                                                    message.success("已经成功解禁账号 " + item.user_id)
                                                }
                                                changeState(item.user_id)
                                                setTimeout(()=>navigate('/manage/users1'), 0);
                                            }}>禁用/解禁</Button>
                                        </Card>
                                        <Divider />
                                    </Col>
                                )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}
