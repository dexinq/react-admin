import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';


class UcarTraffic extends Component {
    constructor(props) {
        super(props);

    }

    getOptions(){

        let option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['入流量','出流量','丢包']
            },

            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['10','11','12','13','14','15','16']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'入流量',
                    type:'line',
                    stack: '总量',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'出流量',
                    type:'line',
                    stack: '总量',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'丢包',
                    type:'line',
                    stack: '总量',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },

            ]
        };
        return option;

    }

    render() {
        return (
            <ReactEcharts
                option={this.getOptions()}
                style={{height: '300px',width:'100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default UcarTraffic;