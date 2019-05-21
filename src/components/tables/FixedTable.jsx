/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';
import $ from 'jquery';

class FixedTable extends React.Component {
    state = {
        columns:[{ title: '名称', dataIndex: 'name', key: 'name' },
        { title: '端口数量', dataIndex: 'portnum', key: 'portnum' },
        { title: '子网', dataIndex: 'subnet', key: 'subnet' },
        {
            title: '操作',
            key: 'operation',
            
            render: (text, record) => <a href={"/#/app/device/index/"+record.key+"/"+record.name}>详细信息</a>,
        },],
        data: [{

        }],
        loading: true
    };
    componentDidMount(){
        $.get(
            "/api/get_all_device_info",
            function(r){
                let data = [];

                let res = eval(r);
                console.info(res);
                for(let i=0; i< res.length;i++){
                    let tmp = {};
                    let oc = res[i]['other_config'];
                    let ports = res[i]['ports'];
                    tmp['key'] = res[i]['uuid'];
                    tmp['name'] = res[i]['name'];
                    if(oc){
                        tmp['subnet'] = oc['subnet'];
                    }else{
                        tmp['subnet'] = 'none';
                    }
                    if(ports){
                        tmp['portnum'] = ports.length;
                    }else{
                        tmp['portnum'] = 0;
                    }

                    data.push(tmp);
                }
                console.info(data);
                this.setState({data:data, loading: false})
            }.bind(this)
        );

    }
    render() {
        return (<Table columns={this.state.columns} loading={this.state.loading} dataSource={this.state.data} />)
    }
}

export default FixedTable;