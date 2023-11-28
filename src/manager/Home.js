import React from 'react'
import "../css/base.less"
import {Outlet} from "react-router-dom"
import {Layout} from "antd"
import Head from './Head'
import Sider from './Sider'

const { Content} = Layout;

export default function Home() {
    return (
        <Layout id="app">
            <Head />
            <div className="left">
                <Sider />
                <Content>
                    <div className="container">
                        <Outlet />
                    </div>
                </Content>
            </div>
            <footer>Bookstore | myStore &copy; 2022 Junchen Lu </footer>
        </Layout>
    )
}
