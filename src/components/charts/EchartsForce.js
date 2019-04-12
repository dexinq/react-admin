/**
 * Created by SEELE on 2017/8/23.
 */
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import sw from '../../style/imgs/switch.png';
import dk from '../../style/imgs/docker.png';
import openstack from '../../style/imgs/openstack.png';

const option = {
    title: {
        text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    animation: false,
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        y: "bottom",
        show: false,
        data: ["朋友", "战友", '亲戚']
    },
    series: [

        {
            type: 'graph',
            layout: 'none',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '朋友',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '战友',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '亲戚',
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: 'ovs',
                draggable: false,
                x: 100,
                y: 50,
                symbol: "image://" + sw
            }, {
                name: 'docker',
                category: 1,
                x: 50,
                y: 100,
                symbol: "image://" + dk
            }, {
                name: 'openstack',
                category: 1,
                x: 150,
                y: 100,
                symbol: "image://" + openstack
            }],
            links: [{
                source: 'ovs',
                target: 'docker',
                value: ""
            },{
                source: 'ovs',
                target: 'openstack',
                value: ""
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};
class EchartsForce extends Component {
    render() {
        return (
            <ReactEcharts
                option={option}
                style={{height: '600px', width: '100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default EchartsForce;