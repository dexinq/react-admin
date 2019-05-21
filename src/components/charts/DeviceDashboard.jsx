/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import UcarTraffic from "./UcarTraffic";
import FlowTraffic from "./FlowTraffic";
import $ from 'jquery';


class UcarDeviceDashboard extends React.Component {
    constructor(props){
        super(props);
        this.uuid = this.props.match.params.uuid;
        this.name = this.props.match.params.name;
        this.state = {monitor:true};
    };
    componentDidMount() {
        $.get(
            '/api/logical_device_info?uuid='+this.uuid+'&name='+this.name,
            function (r) {
                let res = JSON.parse(r);

                console.info(res);
                this.setState({"monitor": false})

            }.bind(this)
        );
    };

    onMonitorClick = (event) => {

        $.post(
            '/api/monitor_add',
            JSON.stringify({'uuid':this.uuid,'name':this.name}),
            function(res){
                console.log(res);
            },'json'
        )
    };
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Card title="基本信息" bordered={false}>
                        <Button type="primary" disabled={this.state.monitor} onClick={this.onMonitorClick}>开启监控</Button>
                       <p>基础数据</p>
                       <p>NAT</p>
                       <p>ACL</p>
                    </Card>
                </Row>
                <Row gutter={16}>

                    <Col className="gutter-row">
                        <div className="gutter-box">
                            <Card title="流量统计" bordered={false}>
                                <UcarTraffic />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row">
                        <div className="gutter-box">
                            <Card title="流" bordered={false}>
                                <FlowTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default UcarDeviceDashboard;