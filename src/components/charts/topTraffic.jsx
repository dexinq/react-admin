import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: '流量top',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['VM1','VM2','VM3','VM4','VM5','VM6']
    },
    series: [
        {
            name: '2012年',
            type: 'bar',
            data: [1932, 2343, 3100, 12159, 13414, 68180]
        }
    ]
};

const TopTraffic = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default TopTraffic;