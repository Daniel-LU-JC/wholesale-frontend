import React from "react";
import {Button, InputNumber, message} from "antd";
import {changeNumber, deleteCartItem} from "../service/dataService";
import {useNavigate} from "react-router-dom";

export function Volumes(props) {

    const obj = props.record;

    const change = (value) => {
        let user_id = localStorage.getItem("user_id")
        changeNumber(user_id, obj.id, value)
    }

    return(
        <InputNumber min={1} max={1000} defaultValue={obj.number} onChange={change}/>
    )

}

export function Delete(props) {

    const navigate = useNavigate();

    const obj = props.record;

    const handleClick = () => {
        let user_id = localStorage.getItem("user_id")

        deleteCartItem(user_id, obj.id, ()=> {});

        setTimeout(()=>navigate('/cart/confirm'), 500);

        message.success("已成功为您删除《" + obj.name + "》")
    }

    return (
        <Button type="danger" style={{marginLeft:100}} onClick={handleClick}>删除书籍</Button>
    )

}
