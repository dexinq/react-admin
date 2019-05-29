import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTopTalkers extends Component {

    state = {};

    componentDidMount(){

        $.get(
            "/api/get_top_talker",
            function (r) {
                let res = eval(r);
                this.setState({data: res["data"]});
                this.setState({links: res["links"]});
            }
        ).bind(this)

    };

    getOption=()=>{
        return{
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: {
                type: 'sankey',
                layout: 'none',
                focusNodeAdjacency: 'allEdges',
                data: this.state.data,
                links: this.state.links,
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
        }
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{height: '300px',width:'100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default UcarTopTalkers;