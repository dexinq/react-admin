/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Input, Button, Icon } from 'antd';

const data = [{
    key: '1',
    name: 'regionone',
    type: 'ovs',
    desc: 'for test',
}];

class SearchTable extends React.Component {
    state = {
        filterDropdownVisible: false,
        data,
        searchText: '',
        filtered: false,
    };
    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    };
    onSearch = () => {
        const { searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        this.setState({
            filterDropdownVisible: false,
            filtered: !!searchText,
            data: data.map((record) => {
                const match = record.name.match(reg);
                if (!match) {
                    return null;
                }
                return {
                    ...record,
                    name: (
                        <span>
              {record.name.split(reg).map((text, i) => (
                  i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                };
            }).filter(record => !!record),
        });
    };
    render() {
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: (
                <div className="custom-filter-dropdown">
                    <Input
                        ref={ele => this.searchInput = ele}
                        placeholder="Search name"
                        value={this.state.searchText}
                        onChange={this.onInputChange}
                        onPressEnter={this.onSearch}
                    />
                    <Button type="primary" onClick={this.onSearch}>Search</Button>
                </div>
            ),
            filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
            filterDropdownVisible: this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }, () => this.searchInput.focus()),
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
            filters: [{
                text: 'London',
                value: 'London',
            }, {
                text: 'New York',
                value: 'New York',
            }],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        }];
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} />
                <style>{`
                    .custom-filter-dropdown {
                      padding: 8px;
                      border-radius: 6px;
                      background: #fff;
                      box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
                    }
                    .custom-filter-dropdown input {
                      width: 130px;
                      margin-right: 8px;
                    }
                    .highlight {
                      color: #f50;
                    }
                `}</style>
            </div>
        );
    }
}

export default SearchTable;