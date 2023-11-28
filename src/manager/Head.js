import React from 'react';
import logoImg from "../assets/homeLogo.jpg";
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import "../css/base.less"

const Head = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        message.success('退出成功，即将返回登录页面...')
        setTimeout(()=>navigate('/login'), 1500)
    }

    const cart = () => {
        message.success('即将前往购物车...')
        setTimeout(()=>navigate('/cart'), 1500)
    }

    const menu = (
        <Menu>
            <Menu.Item onClick={logout}>
                <a target="_blank" rel="noopener noreferrer">
                    退出登录
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <header>
            <img src={logoImg} alt="" className="logo"/>

            <div id="title">My Bookstore</div>

            <div className="right">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        我是管理员 <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </header>
    );
};

export default Head;