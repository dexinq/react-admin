/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';
import $ from 'jquery';

class UcarRegionDeviceTable extends React.Component {
    state = {
        columns:[{ title: 'id', dataIndex: 'uuid', key: 'uuid' },
        { title: '位置', dataIndex: 'hostname', key: 'hostname' },
        { title: 'ip地址', dataIndex: 'ip', key: 'ip' },
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

        $.get(
            "/api/get_region_device_info?region="+name,
            function(r){

                let res = eval(r);

                this.setState({data:res, loading: false})
            }.bind(this)
        );

    }
    render() {
        return (<Table columns={this.state.columns} loading={this.state.loading} dataSource={this.state.data} />)
    }
}

export default UcarRegionDeviceTable;