/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';

class FixedTable extends React.Component {
    state = {
        columns:[{ title: '名称', dataIndex: 'name', key: 'name' },
        { title: '位置', dataIndex: 'position', key: 'position' },
        { title: '端口数量', dataIndex: 'portnum', key: 'portnum' },
        { title: '状态', dataIndex: 'state', key: 'state' },
        {
            title: '操作',
            key: 'operation',
            
            render: () => <a>详细信息</a>,
        },],
        data: [{
            key: '1',
            name: 'test1',
            position: "b28-3-test-machine",
            portnum: 18,
            state: "good",
        }]
    } 
    componentDidMount(){
        //here do some ajax
    }
    render() {
        return (<Table columns={this.state.columns} dataSource={this.state.data} />)
    }
}

export default FixedTable;