/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import Syllabux from './Syllabux'

class Echarts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="当前课表" bordered={false}>
                                <Syllabux />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Echarts;