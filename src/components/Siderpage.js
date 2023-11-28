import React, {useEffect, useState} from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "../css/base.less";
import {useNavigate, useLocation} from "react-router-dom";

const { SubMenu } = Menu;

const Siderpage = () => {

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

            <Menu.Item key="homepage">书城首页</Menu.Item>

            <SubMenu key="sub1" icon={<MailOutlined />} title="书籍详情">
            </SubMenu>

                <Menu.Item key="details">计算机编程</Menu.Item>
                <Menu.Item key="details2">世界名著</Menu.Item>
                <Menu.Item key="details3">武侠小说</Menu.Item>

            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="个人中心">
            </SubMenu>
                <Menu.Item key="cart">我的购物车</Menu.Item>
                <Menu.Item key="order">我的订单</Menu.Item>

        </Menu>
    );
};

export default Siderpage;
