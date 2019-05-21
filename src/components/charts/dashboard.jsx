/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import TopTraffic from './topTraffic';
import ipTraffic from './ipTraffic';
import UcarTraffic from './UcarTraffic';
import EchartsEffectScatter from './EchartsEffectScatter';
import EchartsForce from './EchartsForce';

class UcarDashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="区域图" bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
                <Row gutter={16}>
                    
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="设备统计" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="ip池" bordered={false}>
                                <ipTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="24h 虚机流量top10" bordered={false}>
                                <TopTraffic />
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="24h 业务线流量top10" bordered={false}>
                                <TopTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="总流量" bordered={false}>
                                <UcarTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UcarDashboard;