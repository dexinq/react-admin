/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicForm from '../components/forms/BasicForm';
import BasicTable from '../components/tables/BasicTables';
import AdvancedTable from '../components/tables/AdvancedTables';
import AsynchronousTable from '../components/tables/AsynchronousTable';
import Echarts from '../components/charts/Echarts';
import UcarDashboard from '../components/charts/dashboard';
import UcarDeviceDashboard from '../components/charts/DeviceDashboard';
import Recharts from '../components/charts/Recharts';
import SyllabuxEcharts from '../components/charts/SyllabuxEcharts';
import StudentTable from '../components/tables/StudentTable';
import TeacherTable from '../components/tables/TeacherTable';
import PackageTable from '../components/tables/PackageTable';
import Icons from '../components/ui/Icons';
import Buttons from '../components/ui/Buttons';
import Spins from '../components/ui/Spins';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import Tabs from '../components/ui/Tabs';
import Banners from '../components/ui/banners';
import Drags from '../components/ui/Draggable';
import Dashboard from '../components/dashboard/Dashboard';
import UcarDevicePortIndex from '../components/charts/UcarDevicePortIndex'
import UcarRegionDevice from '../components/tables/UcarRegionDevice'
import TaskMangement from '../components/tables/TaskMangement';
import Gallery from '../components/ui/Gallery';
import BasicAnimations from '../components/animation/BasicAnimations';
import ExampleAnimations from '../components/animation/ExampleAnimations';
import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';
import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
import Bundle from '../components/widget/Bundle';
import Cssmodule from '../components/cssmodule';
import MapUi from '../components/ui/map';

const WysiwygBundle = (props) => (
    <Bundle load={Wysiwyg}>
        {(Component) => <Component {...props} />}
    </Bundle>
);

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={UcarDashboard} />
                <Route exact path="/app/device/index/:hostname/:ip" component={UcarDeviceDashboard} />
                <Route exact path="/app/device/port/index/:portname/:ip" component={UcarDevicePortIndex} />

                <Route exact path="/app/basic/virtual_network/:region" component={UcarRegionDevice} />

                <Route exact path="/app/basic/topo" component={Echarts} />
                <Route exact path="/app/form/basicForm" component={BasicForm} />
                <Route exact path="/app/table/basicTable" component={BasicTable} />
                <Route exact path="/app/basic/controllerList" component={BasicTable} />
                <Route exact path="/app/table/advancedTable" component={AdvancedTable} />
                <Route exact path="/app/basic/deviceList" component={AdvancedTable} />
                <Route exact path="/app/table/asynchronousTable" component={AsynchronousTable} />
                {/*<Route exact path="/app/chart/echarts" component={dashboard} />*/}
                <Route exact path="/app/basic/dashboard" component={UcarDashboard} />
                <Route exact path="/app/data/task" component={TaskMangement} />
                <Route exact path="/app/chart/recharts" component={Recharts} />

                <Route exact path="/app/ui/icons" component={Icons} />
                <Route exact path="/app/ui/buttons" component={Buttons} />
                <Route exact path="/app/ui/spins" component={Spins} />
                <Route exact path="/app/ui/modals" component={Modals} />
                <Route exact path="/app/ui/notifications" component={Notifications} />
                <Route exact path="/app/ui/tabs" component={Tabs} />
                <Route exact path="/app/ui/banners" component={Banners} />
                <Route exact path="/app/ui/wysiwyg" component={WysiwygBundle} />
                <Route exact path="/app/ui/drags" component={Drags} />
                <Route exact path="/app/ui/gallery" component={Gallery} />
                <Route exact path="/app/ui/map" component={MapUi} />

                <Route exact path="/app/animation/basicAnimations" component={BasicAnimations} />
                <Route exact path="/app/animation/exampleAnimations" component={ExampleAnimations} />

                <Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route exact path="/app/cssModule" component={Cssmodule} />

                <Route exact path="/app/management/syllabux" component={SyllabuxEcharts} />
                <Route exact path="/app/management/student" component={StudentTable} />
                <Route exact path="/app/management/teacher" component={TeacherTable} />
                <Route exact path="/app/management/package" component={PackageTable} />

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}