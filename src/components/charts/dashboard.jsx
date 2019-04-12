/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import TopTraffic from './topTraffic';
import EchartsEffectScatter from './EchartsEffectScatter';
import EchartsForce from './EchartsForce';

class TaskMangementEcharts extends React.Component {
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
                            <Card title="流量top10" bordered={false}>
                                <TopTraffic />
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="散点图" bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default Echarts;