/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import UcarTraffic from "./UcarTraffic";
import FlowTraffic from "./FlowTraffic";
import UcarPortACL from '../tables/UcarPortACL'
import $ from 'jquery';
import EchartsPie from "./EchartsPie";


class UcarDevicePortIndex extends React.Component {
    constructor(props){
        super(props);
        // this.ip = this.props.match.params.ip;
        // this.hostname = this.props.match.params.hostname;
        // this.state = {monitor:true};
    };



    render() {
        return (
            <div className="gutter-example">

                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="入流量统计" bordered={false}>
                                <UcarTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="出流量统计" bordered={true}>
                                <UcarTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="acl" bordered={false}>
                                <UcarPortACL />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="qos" bordered={false}>
                                <UcarPortACL />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UcarDevicePortIndex;