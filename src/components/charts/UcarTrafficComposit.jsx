import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTrafficComposit extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){

    };

    getOptions(){

        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['7275', '123', '31750', '20000', '3695', '12681', '6129', '33177', '52049', '59283']
            },
            series: [

                {
                    name:'端口流量',
                    type:'pie',
                    radius: ['0', '60%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    data:[
                        {value:512034, name:'7275'},
                        {value:289800, name:'123'},
                        {value:216937, name:'31750'},
                        {value:191166, name:'20000'},
                        {value:85561, name:'3695'},
                        {value:17686, name:'12681'},
                        {value:6144, name:'6129'},
                        {value:6047, name:'33177'},
                        {value:5982, name:'52049'},
                        {value:5864, name:'59283'}
                    ]
                }
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

export default UcarTrafficComposit;