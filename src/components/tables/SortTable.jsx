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

class SortTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        visible: false,
        loading: true,
        data: [],
    };
    modalConf = {
        maskClosable: false,
        destroyOnClose: true,
    }
    componentDidMount = () => {
        let that = this;
        $.get(
            '/api/controller_get',
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
        const { getFieldDecorator } = this.props.form
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
            title: '描述',
            dataIndex: 'description',
            key: 'description',
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];        
        return (
            <div>
                <div className="table-operations">
                    <Button icon="plus" style={{ marginBottom: 16 }} onClick={this.showModal}>添加</Button>
                </div>
                <Table columns={columns} loading={this.state.loading} dataSource={this.state.data} onChange={this.handleChange} />
                <Modal maskClosable={this.modalConf.maskClosable} destroyOnClose={this.modalConf.destroyOnClose} title="新增控制器" visible={this.state.visible} onCancel={this.hideModal} onOk={this.submitAdd} okText="确认" cancelText="取消">
                 <Form layout="vertical">
                     <FormItem label="名称">
                        {getFieldDecorator('name', {'initialValue':'newname'})(<Input />)}
                     </FormItem>
                     <FormItem label="类别">
                     {getFieldDecorator('type', {'initialValue':'1'})(
                     <Select>
                            <Option value="1">ovn</Option>
                    </Select>
                    )}
                        
                     </FormItem>
                     <FormItem label="地址">
                     {getFieldDecorator('nb', {'initialValue':'127.0.0.1'})(<Input addonBefore="nb" addonAfter="6641" />)}
                     {getFieldDecorator('sb', {'initialValue':'127.0.0.1'})(<Input addonBefore="sb" addonAfter="6642" />)}
                     </FormItem>
                 </Form>
             </Modal>
            </div>
        );
    }
}

export default Form.create()(SortTable);
