import React, {Component} from 'react';
import Home_pics from "../components/home_pics";
import { Divider } from 'antd';
import title04 from "../assets/title04.png";
import "../css/base.less";
import Search_bar from "../components/Search_bar";
import { Card, Col, Row } from 'antd';
import { BackTop } from 'antd';
import {Link} from "react-router-dom";

const { Meta } = Card;

class Homepage extends Component {
    render() {
        return (
            <div>
                <Search_bar />

                <Divider />
                <img src={title04} alt="" className="title0"/>
                <Divider />
                <Home_pics />

                <Divider />
                <Divider />

            <BackTop />

            </div>
        );
    }
}

export default Homepage;