import React, {useEffect, useState} from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "../css/base.less";
import {useNavigate, useLocation} from "react-router-dom";

const { SubMenu } = Menu;

const Sider = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const [defaultKey, setDefaultKey] = useState('homepage')

    useEffect(()=>{
        let path = location.pathname
        let key = path.split('/')[1]
        setDefaultKey(key)
    }, [])

    const handleClick = e => {
        navigate('/'+e.key)
        setDefaultKey(e.key)
    };

    return (
        <Menu
            onClick={handleClick}
            style={{ width: 200 }}
            selectedKeys={[defaultKey]}
            mode="inline"
            className="aside"
            theme="dark">

            <SubMenu key="sub1" icon={<MailOutlined />} title="管理员操作">
            </SubMenu>
            <Menu.Item key="manage/users">用户管理</Menu.Item>
            <Menu.Item key="manage/books">书籍管理</Menu.Item>
            <Menu.Item key="manage/order">订单管理</Menu.Item>
            <Menu.Item key="manage/info">信息统计</Menu.Item>

        </Menu>
    );
};

export default Sider;
