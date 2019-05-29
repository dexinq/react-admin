/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import UcarTraffic from "./UcarTraffic";
import FlowTraffic from "./FlowTraffic";
import UcarVirtualDevicePortTable from '../tables/UcarVirtualDevicePortTable'
import $ from 'jquery';
import UcarTopTalkers from './UcarTopTalkers'
import EchartsPie from "./EchartsPie";
import UcarTrafficComposit from "./UcarTrafficComposit";


class UcarDeviceDashboard extends React.Component {
    constructor(props){
        super(props);
        this.ip = this.props.match.params.ip;
        this.hostname = this.props.match.params.hostname;
        this.state = {monitor:true};
    };

    componentDidMount(){
        $.get(
            "/api/get_real_device_info?hostname="+this.hostname+"&ip="+this.ip,
            function(r){

                let res = eval(r);

                this.setState({data:res, loading: false})
            }.bind(this)
        );
    };

    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" >
                        <div className="gutter-box">
                            <Card title="端口列表" bordered={false}>
                                <UcarVirtualDevicePortTable hostname={this.hostname} ip={this.ip}/>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="上行端口流量" bordered={false}>
                                <UcarTraffic hostname={this.hostname} ip={this.ip}/>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="1h top talkers" bordered={false}>
                                <UcarTopTalkers />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="1h 流量分类统计" bordered={false}>
                                <UcarTrafficComposit />
                            </Card>
                        </div>
                    </Col>
                </Row>


            </div>
        ).bind(this)
    }
}

export default UcarDeviceDashboard;