import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTopTalkers extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){

    };

    getOptions(){

        let option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: {
                type: 'sankey',
                layout:'none',
                focusNodeAdjacency: 'allEdges',
                data: [{
                    name: '10.212.27.112'
                }, {
                    name: '10.212.27.17'
                }, {
                    name: '10.212.21.30'
                }, {
                    name: '10.212.21.29'
                }, {
                    name: '10.212.36.42'
                }, {
                    name: '10.204.31.118'
                }, {
                    name: '10.204.31.119'
                }, {
                    name: '10.212.27.110'
                }, {
                    name: '10.204.247.115'
                }, {
                    name: '10.204.247.112'
                },{
                    name: '10.204.247.116'
                },
                    {
                        name: '10.212.13.21'
                    }],
                links: [{
                    source: '10.212.27.112',
                    target: '10.212.21.30',
                    value: 2798677216
                }, {
                    source: '10.212.27.112',
                    target: '10.212.21.29',
                    value: 1431918351
                }, {
                    source: '10.212.27.112',
                    target: '10.212.36.42',
                    value: 1303648898
                }, {
                    source: '10.212.27.17',
                    target: '10.212.13.21',
                    value: 296848764
                }, {
                    source: '10.212.27.112',
                    target: '10.204.31.118',
                    value: 260379787
                }, {
                    source: '10.212.27.112',
                    target: '10.212.27.110',
                    value: 213846418
                }, {
                    source: '10.212.27.112',
                    target: '10.204.31.119',
                    value: 221858427
                }, {
                    source: '10.212.27.17',
                    target: '10.204.247.115',
                    value: 152042528
                }, {
                    source: '10.212.27.17',
                    target: '10.204.247.112',
                    value: 151942528
                }, {
                    source: '10.212.27.17',
                    target: '10.204.247.116',
                    value: 151842528
                }],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.5
                    }
                }
            }
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

export default UcarTopTalkers;