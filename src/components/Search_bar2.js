import React from 'react';
import { Input, Space, message } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import books from "../customer/information";

const { Search } = Input;

const SearchBar2 = () => {

    const navigate = useNavigate();

    const onSearch = value => {

        const findResult = books.find((infoObj)=>{
            return (String)(infoObj.name).indexOf(value) >= 0
        })

        if (findResult !== undefined){
            message.success('成功为您找到《' + findResult.name + '》，正在跳转...');
            setTimeout(() => navigate(`/manage/display/?id=${findResult.id}`), 1500);
        }
        else {
            message.error('抱歉，未找到您想要的内容！');
        }
    }

    return (
        <div>
            <Search
                placeholder="请输入书名"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </div>
    );
};

export default SearchBar2;
