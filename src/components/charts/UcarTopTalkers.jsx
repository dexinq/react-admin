import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';


class UcarTopTalkers extends Component {
    constructor(props) {
        super(props);

        let option = {
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
        this.setState({option: option})
    }

    componentDidMount(){
        $.get(
            "/api/get_top_talker",
            function (r) {
                let res = eval(r);
                this.option.series.data = res["data"];
                this.option.series.links = res["links"];
                this.setState({option: this.option})
            }
        ).bind(this)

    };

    render() {
        return (
            <ReactEcharts
                option={this.state.option}
                style={{height: '300px',width:'100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default UcarTopTalkers;