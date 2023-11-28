import React from 'react'
import "./css/base.less"
import {Outlet} from "react-router-dom"
import {Layout} from "antd"
import Header from '../src/components/Header'
import Siderpage from "./components/Siderpage";

const { Content} = Layout;

export default function App() {

    return (
        <Layout id="app">
            <Header />
            <div className="left">
                <Siderpage />
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
