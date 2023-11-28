import React, {useState} from 'react'
import {Button, DatePicker, Divider, Form, message} from "antd";
import {Link} from "react-router-dom";

export default function Info() {

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    const [start2, setStart2] = useState("")
    const [end2, setEnd2] = useState("")

    let onFinish = (fieldsvalue) => {
        const value = {
            'start': fieldsvalue['start'].format('YYYY-MM-DD'),
            'end': fieldsvalue['end'].format('YYYY-MM-DD')
        }

        // 下面通过发送 ajax 请求获得目标时间段内的所有订单

        setStart(value.start)
        setEnd(value.end)

        message.success("时间范围设置为 " + value.start + "~" + value.end)

    }

    let onFinish2 = (fieldsvalue) => {
        const value = {
            'start': fieldsvalue['start'].format('YYYY-MM-DD'),
            'end': fieldsvalue['end'].format('YYYY-MM-DD')
        }

        setStart2(value.start)
        setEnd2(value.end)

        message.success("时间范围设置为 " + value.start + "~" + value.end)
    }

    return (
        <div>
            <h1 style={{marginLeft:400, fontSize:40}}>统计书籍销售情况：</h1>

            <h2>查看在指定的时间范围内各种书的销量情况，即热销榜：</h2>

            <Divider />

            <Form layout="inline" onFinish={onFinish}>
                <Form.Item label="开始日期" name="start">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="结束日期" name="end">
                    <DatePicker />
                </Form.Item>
                <Button type="default" style={{marginLeft: 100, width:200}} htmlType="submit">设置时间范围</Button>
            </Form>

            <Divider />

            <Link to={`/manage/sales/?start=${start}&end=${end}`}>
                <Button type="primary" style={{width:500, height: 50, marginLeft:250, marginTop:50}}>点击查看详情</Button>
            </Link>

            <Divider />

            <h1 style={{marginLeft:400, fontSize:40}}>统计用户消费情况：</h1>

            <h2>查看在指定的时间范围内各用户的消费情况，即消费榜：</h2>

            <Divider />

            <Form layout="inline" onFinish={onFinish2}>
                <Form.Item label="开始日期" name="start">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="结束日期" name="end">
                    <DatePicker />
                </Form.Item>
                <Button type="default" style={{marginLeft: 100, width:200}} htmlType="submit">设置时间范围</Button>
            </Form>

            <Divider />

            <Link to={`/manage/buyers/?start=${start2}&end=${end2}`}>
                <Button type="primary" style={{width:500, height: 50, marginLeft:250, marginTop:50}}>点击查看详情</Button>
            </Link>

            <Divider />
        </div>
    )
}
