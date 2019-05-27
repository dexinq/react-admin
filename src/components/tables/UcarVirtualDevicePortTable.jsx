/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';
import $ from 'jquery';

class UcarVirtualDevicePortTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState({data:props.data})
    }

    state = {
        columns:[{ title: 'id', dataIndex: 'p_uuid', key: 'p_uuid' },
        { title: '名称', dataIndex: 'p_name', key: 'p_name' },
        { title: 'mac地址', dataIndex: 'p_mac', key: 'p_mac' },
        { title: 'ip地址', dataIndex: 'p_ip', key: 'p_ip' },
        {
            title: '操作',
            key: 'operation',
            
            render: (text, record) => <a href={"/#/app/device/index/"+record.p_name+"/"+record.p_ip}>详细信息</a>,
        },],
        data: [{

        }],
        loading: true
    };
    componentDidMount(){
        let name = this.props.region;

        // $.get(
        //     "/api/get_region_device_info?region="+name,
        //     function(r){
        //
        //         let res = eval(r);
        //
        //         this.setState({data:res, loading: false})
        //     }.bind(this)
        // );

    }
    render() {
        return (<Table columns={this.state.columns} dataSource={this.state.data} />)
    }
}

export default UcarVirtualDevicePortTable;