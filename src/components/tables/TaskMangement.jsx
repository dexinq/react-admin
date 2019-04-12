/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import BasicTable from './BasicTable';
import SelectTable from './SelectTable';
import TaskTable from './Task';
import SearchTable from './SearchTable';
import BreadcrumbCustom from '../BreadcrumbCustom';

const TaskMangement = () => (
    <div className="gutter-example">
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="任务列表" bordered={false}>
                        <TaskTable />
                    </Card>
                </div>
            </Col>
        </Row>
        
        
    </div>
);

export default TaskMangement;