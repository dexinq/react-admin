/**
 * Created by SEELE on 2017/8/23.
 */
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import sw from '../../style/imgs/switch.png';
import dk from '../../style/imgs/docker.png';
import rt from '../../style/imgs/router.png';
import { browserHistroy } from 'react-router-dom'
import openstack from '../../style/imgs/openstack.png';
import $ from 'jquery'
import { Redirect } from 'react-router-dom';



class EchartsForce extends Component {
    constructor(props) {
        super(props);
        this.option = {
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
                layout: 'force',
                symbolSize: 45,
                focusNodeAdjacency: true,
                roam: true,
                categories: [{
                    name: '正常',
                    itemStyle: {
                        normal: {
                            color: "#009800",
                        }
                    }
                }, {
                    name: '拥塞',
                    itemStyle: {
                        normal: {
                            color: "#4592FF",
                        }
                    }
                }, {
                    name: '不通',
                    itemStyle: {
                        normal: {
                            color: "#3592FF",
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
                data: [],
                links: [],
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
        this.onEvents = {
            'click': this.onClickEvent
        };
    }
    componentDidMount = () => {
        let echarts_instance = this.echarts_react.getEchartsInstance();
        echarts_instance.showLoading = true;
        let data = this.option.series[0].data;
        let link = this.option.series[0].links;
        $.get("/api/controller_topo_get", function (res) {
            let result = JSON.parse(res);
            console.info(result);
            for(let i=0; i<result["devices"].length; i++){
                let tmp = {};
                tmp['name'] = result["devices"][i]["name"];
                if (result["devices"][i]["type"]=='sw'){
                    tmp['symbol'] =  "image://" + sw;
                }else {
                    tmp['symbol'] =  "image://" + rt;
                }
                tmp['uuid'] = result["devices"][i]["uuid"];

                data.push(tmp);
            }
            for(let j=0; j<result["links"].length; j++){
                let tmp = {};
                console.info(result["links"][j]);
                tmp['source'] = result["links"][j][0];
                tmp['target'] = result["links"][j][1];
                tmp['value'] = "";
                link.push(tmp)
            }
            echarts_instance.setOption(this.option);
            echarts_instance.showLoading = false;
        }.bind(this));
        console.info(this.option);

    };
    getOptions = () => {
        console.info(this.option);

        return this.option
    };
    onClickEvent=(params)=>{
        // this.props.history.push({
        //     pathname: '/app/device/index'
        //
        // });
        console.info(params);

        window.location.href = "/#/app/device/index/"+params.data["uuid"]+"/"+params.data["name"];
    };

    render() {
        return (
            <ReactEcharts
               option={this.getOptions()}
               style={{height: '600px', width: '100%'}}
               className={'react_for_echarts'}
               lazyUpdate={true}
               onEvents={this.onEvents}
               ref={(e) => { this.echarts_react = e; }}
            />
        )
    }
}

export default EchartsForce;