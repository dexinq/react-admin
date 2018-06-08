/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import EditableTable from './EditableTable';
import BreadcrumbCustom from '../BreadcrumbCustom';

class StudentTable extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="高级表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="学生管理" bordered={false}>
                                <EditableTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StudentTable;