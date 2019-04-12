/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: '设备统计',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#777'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'虚拟交换机'},
                {value:310, name:'虚拟路由器'},
                {value:274, name:'交换机'},
                {value:235, name:'路由器'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: '#777'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#777'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: '#777'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

const EchartsPie = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default EchartsPie;