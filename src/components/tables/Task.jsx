/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Table, Input, Popconfirm, Button, Modal, Form, Switch, Select } from 'antd';
import $ from 'jquery'

const FormItem = Form.Item;
const Option = Select.Option;

// const data = [{
//     key: '1',
//     name: 'regionone',
//     type: 'ovn',
//     desc: 'for test',
// }];

class TaskTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        visible: false,
        loading: true,
        data: [],
    };
    
    componentDidMount = () => {
        let that = this;
        $.get(
            '/api/task_get',
            function(res){
                console.info(res)
                that.setState({data:eval(res)})
                that.setState({loading:false})
            }
        )
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    hideModal = () => {
        this.setState({
            visible: false
        })
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };
    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };
    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };
    submitAdd = () => {
        let controller_name = this.props.form.getFieldValue("name")
        let controller_type = this.props.form.getFieldValue("type")
        let controller_nb = this.props.form.getFieldValue("nb")
        let controller_sb = this.props.form.getFieldValue("sb")
        $.post(
            '/api/controller_add',
            JSON.stringify({'name':controller_name, 'type':controller_type, 'nb':controller_nb, 'sb':controller_sb}),
            function(res){
                console.log("ok");
                this.hideModal()
            },'json'
        )
        
    }
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            filters: [
                { text: 'Joe', value: 'Joe' },
                { text: 'Jim', value: 'Jim' },
            ],
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
            title: '时间',
            dataIndex: 'start_time',
            key: 'start_time',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }, {
            title: '下次运行时间',
            dataIndex: 'next_run_time',
            key: 'next_run_time',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }, {
            title: '并发数',
            dataIndex: 'async',
            key: 'async',
            key: 'async',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }, {
            title: '丢失数',
            dataIndex: 'async',
            key: 'async',
            key: 'async',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];        
        return (
            <div>
                <Table columns={columns} loading={this.state.loading} dataSource={this.state.data} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Form.create()(TaskTable);
