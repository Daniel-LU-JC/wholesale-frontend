import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, message} from 'antd';
import '../css/login.less'
import logoImg from '../assets/my_logo.png'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom'
import { Radio, Divider } from 'antd';
import {checkAuth} from "../service/dataService";

export default function Login() {

    const [value, setValue] = React.useState(1);

    const [permit, setPermit] = useState(0);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);

        checkAuth(values.username, values.password, values.identity, (data) => {

            if (data.length === 0) {
                setPermit(0);
                message.error("请输入正确的用户名及密码！")
            } else {
                let [obj_user] = data;
                let user_check = {
                    id: obj_user.id,
                    name: obj_user.user_name,
                    password: obj_user.user_password,
                    identity: obj_user.identity,
                    email: obj_user.email,
                    address: obj_user.address,
                    state: obj_user.state
                }
                if (user_check.state === "1") {
                    setPermit(1);
                    message.success("成功登录！正在跳转...")

                    let cur_user = JSON.stringify(user_check);

                    localStorage.setItem("user_id", user_check.id);
                    localStorage.setItem("cur_user", cur_user);

                    if (user_check.identity === "customer")
                        setTimeout(()=>navigate('/homepage'), 1000);
                    else
                        setTimeout(()=>navigate('/manage/users'), 1000);
                }
                else {
                    message.error("抱歉！当前账号已被禁用！")
                    setPermit(0);
                }
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <div className="login_box">
                <img src={logoImg} alt="" />
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item label="您的身份是" name="identity" className="Ident">
                        <Radio.Group
                            onChange={(e)=>{
                                console.log(e);
                                if(e.target.value === "patient"){
                                    // setRegister(true);
                                }
                                else{
                                    // setRegister(false);
                                }
                            }}>
                            <Radio.Button value="customer">用户</Radio.Button>
                            <Radio.Button value="administer">管理员</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="请输入用户名/管理员名" prefix={<UserOutlined className="site-form-item-icon" />} />
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

                    <Form.Item>
                        <Link to="/register">还没账号？立即注册</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            登录
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
}
