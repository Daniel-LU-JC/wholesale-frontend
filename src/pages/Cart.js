import React, {Component} from 'react';
import {Table, Button, Space} from 'antd';
import { InputNumber } from 'antd';

function onChange(value) {
    console.log('changed', value);
}

const columns = [
    {
        title: '书名',
        dataIndex: 'name',
    },
    {
        title: '价格',
        dataIndex: 'age',
    },
    {
        title: '数量',
        dataIndex: 'address',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary">马上购买</Button>
                <Button type="danger">删除物品</Button>
            </Space>
        ),
    },
];

const data = [
    // {
    //     key: '1',
    //     name: 'Java核心技术卷II',
    //     age: '95.20',
    //     address: <InputNumber min={1} max={1000} defaultValue={1} onChange={onChange} />,
    // },
    // {
    //     key: '2',
    //     name: '哈利·波特与死亡圣器',
    //     age: '56.20',
    //     address: <InputNumber min={1} max={1000} defaultValue={1} onChange={onChange} />,
    // },
    // {
    //     key: '3',
    //     name: '草房子',
    //     age: '22.50',
    //     address: <InputNumber min={1} max={1000} defaultValue={1} onChange={onChange} />,
    // },
];

class Cart extends Component {

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        全部取消
                    </Button>
                    <span style={{ marginLeft: 8 }}>
            {hasSelected ? `已选择 ${selectedRowKeys.length} 样物品` : ''}
          </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default Cart;