import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTraffic extends Component {
    constructor(props) {
        super(props);
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },

            legend: {
                data:['出流量','入流量']
            },
            xAxis: [
                {
                    type: 'time',
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '入流量',

                    axisLabel: {
                        formatter: '{value} Bytes'
                    }
                },{
                    type: 'value',
                    name: '出流量',

                    axisLabel: {
                        formatter: '{value} Bytes'
                    }
                }
            ],
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'出流量',
                    type:'line',
                    stack: '总量',
                    data:[]
                },
                {
                    name:'入流量',
                    type:'line',
                    yAxisIndex: 1,
                    data:[]
                }
            ]
        };
        this.state = {
            option: this.option,
            loadingChart: true
        }

    }

    componentDidMount(){
        let echarts = this.refs.echarts.getEchartsInstance();
        $.get(
            "/api/get_real_device_info?hostname="+this.hostname+"&ip="+this.ip+"&data_p=traffic",
            function(r){
                let res = JSON.parse(r);

                let in_traffic = {
                    name:'入流量',
                    type:'line',
                    yAxisIndex: 1,
                    data:res["traffic_in"]
                };
                this.option.series.push(in_traffic);

                let out_traffic = {
                    name:'出流量',
                    type:'line',
                    stack: '总量',
                    data:res["traffic_out"]
                };
                this.option.series.push(out_traffic);

                this.setState({option: this.option, loadingChart: false, })
            }.bind(this)
        );
        echarts.setOption(this.state.option);
    };

    getOptions(){
        return this.option;

    }

    render() {
        return (
            <ReactEcharts
                ref='echarts'
                option={this.getOptions()}
                style={{height: '300px',width:'100%'}}
                className={'react_for_echarts'}
                showLoading={this.state.loadingChart}
                lazyUpdate={true}
                notMerge={true}
            />
        )
    }
}

export default UcarTraffic;