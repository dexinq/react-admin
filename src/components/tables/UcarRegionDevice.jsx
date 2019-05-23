/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import UcarRegionDeviceTable from './UcarRegionDeviceTable';


class UcarRegionDevice extends React.Component {
    constructor(props){
        super(props);
        this.region = this.props.match.params.region;
        this.state = {};
    };
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="虚拟设备列表" bordered={false}>
                                <UcarRegionDeviceTable region={this.region}/>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default UcarRegionDevice;