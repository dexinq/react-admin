import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTopTalkers extends Component {


    constructor(props){
        super(props);
        this.option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: {
                type: 'sankey',
                layout: 'none',
                focusNodeAdjacency: 'allEdges',
                data: [],
                links: [],
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
        this.state={
            loadingChart:true,
            option:this.option
        }
    }
    componentDidMount(){
        let echarts = this.refs.echarts.getEchartsInstance();
        $.get(
            "/api/get_top_talker",
            function (r) {
                let res = JSON.parse(r);
                let data = JSON.parse(res);
                this.option.series.data = data.data;
                this.option.series.links = data.links;
                this.setState({loadingChart: false});
                this.setState({option:this.option});
            }.bind(this)
        );

        echarts.setOption(this.state.option);
    };

    getOption=()=>{
        return this.option;
    };

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

export default UcarTopTalkers;