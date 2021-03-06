/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';
import $ from 'jquery';

class UcarPortACL extends React.Component {
    state = {
        columns:[{ title: 'id', dataIndex: 'uuid', key: 'uuid' },
        { title: '方向', dataIndex: 'hostname', key: 'hostname' },
        { title: '动作', dataIndex: 'mac', key: 'mac' },
        { title: '匹配', dataIndex: 'ip', key: 'ip' },
        { title: '优先级', dataIndex: 'ip', key: 'ip' },
        {
            title: '操作',
            key: 'operation',
            
            render: (text, record) => <a href={"/#/app/device/index/"+record.hostname+"/"+record.ip}>详细信息</a>,
        },],
        data: [{

        }],
        loading: true
    };
    componentDidMount(){
        let name = this.props.region;



    }
    render() {
        return (<Table columns={this.state.columns} loading={this.state.loading} dataSource={this.state.data} />)
    }
}

export default UcarPortACL;