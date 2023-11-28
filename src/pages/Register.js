import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import '../css/login.less'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom'
import {checkAuth, checkRepeat, register} from "../service/dataService";
import {data} from "browserslist";

export default function Register() {

    const navigate = useNavigate();

    const onFinish = (values) => {

        if (!values.email.match(/^\w+@\w+\.\w+$/i)) {
            message.error("请输入正确的邮箱格式")
        } else {
            checkRepeat(values.username, (data) => {
                let [msg] = data;
                if (msg === "Repeat") {
                    message.error("该用户名已被使用，请重新注册！")
                } else {
                    register(values.username, values.password, values.email, values.address);
                    message.success("注册成功！请前往登录...")
                    setTimeout(()=>navigate('/login'), 1000);
                }
            })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <div className="login_box">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password size="large" placeholder="请再次输入密码" prefix={<LockOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="请输入邮箱" prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="请输入地址" prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item>
                        <Link to="/login">已有账号？前往登录</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}