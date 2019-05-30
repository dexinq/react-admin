import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTrafficComposit extends Component {
    constructor(props) {
        super(props);
        this.option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:[]
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
                        {}
                    ]
                }
            ]
        };
        this.state={
            loadingChart:true,
            option:this.option
        }
    }


    componentDidMount(){
        let echarts = this.refs.echarts.getEchartsInstance();
        $.get(
            "/api/get_port_static",
            function (r) {
                let data = JSON.parse(r);
                this.option.legend.data = data["legend_list"];
                this.option.series.data = data["data"];
                console.info(this.option);
                this.setState({loadingChart: false});
                this.setState({option:this.option});
            }.bind(this)
        );

        echarts.setOption(this.state.option);
    };

    getOption(){

        return this.option;

    }

    render() {
        return (
            <ReactEcharts
                ref='echarts'
                option={this.getOption()}
                style={{height: '300px',width:'100%'}}
                className={'react_for_echarts'}
                showLoading={this.state.loadingChart}
                lazyUpdate={true}
                notMerge={true}
            />
        )
    }
}

export default UcarTrafficComposit;