/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import FixedTable from './FixedTable';
import ExpandedTable from './ExpandedTable';
import EditableTable from './EditableTable';
import BreadcrumbCustom from '../BreadcrumbCustom';

class AdvancedTables extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="设备列表" bordered={false}>
                                <FixedTable />
                            </Card>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default AdvancedTables;