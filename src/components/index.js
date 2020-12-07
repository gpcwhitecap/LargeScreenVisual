
// 基于准备好的dom，初始化echarts实例
var pieChart1 = echarts.init(document.getElementById('pieChart1'));
var barChart2 = echarts.init(document.getElementById('barChart2'));
var barChart3 = echarts.init(document.getElementById('barChart3'));
var barChart4 = echarts.init(document.getElementById('barChart4'));
var barChart5 = echarts.init(document.getElementById('barChart5'));


// 指定图表的配置项和数据
const legenddata = [
    { value: 26, name: '大带宽' },
    { value: 20, name: '广连接' },
    { value: 12, name: '低时延' }
];
var pieOption1 = {
    title: {
        text: '{a|58}{c|\n}{c|' + '总数 / 个' + '}',
        width: '100%',
        textStyle: {
            color: "#fff",
            fontSize: 32,

            rich: {
                a: {
                    fontSize: 32,
                    color: '#ffffff'
                },
                c: {
                    fontSize: 12,
                    color: "rgba(255,255,255,.5)",
                }
            }
        },
        x: "18%",
        y: "center",
    },
    // tooltip: {
    //     trigger: 'item',
    // },
    legend: [{
        x: '62%',
        y: '10%',
        icon: "circle",
        itemWidth: 6,
        itemHeight: 6,
        align: 'left',
        data: ['大带宽'],
        formatter: function(name) {
            var data = legenddata;
            var total = 0;
            var tarValue;
            for (var i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    tarValue = data[i].value;
                }
            }
            var p = ((tarValue / total) * 100);
            return `{value|${legenddata[0].value}}{tag| |}{value|${parseInt(p)}}{symbol|%}\n{title|${legenddata[0].name}}`
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    padding: [-8, 0, 0, 0]
                },
                value: {
                    fontSize: 30,
                    color: "#fff"
                },
                tag: {
                    color: "#68707F",
                    padding: 8
                },
                symbol: {
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    padding: [0, 0, 0, 4]
                }
            }
        },
    }, {
        x: '62%',
        y: '45%',
        icon: "circle",
        itemWidth: 6,
        itemHeight: 6,
        align: 'left',
        data: ['广连接'],
        formatter: function(name) {
            var data = legenddata;
            var total = 0;
            var tarValue;
            for (var i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    tarValue = data[i].value;
                }
            }
            var p = ((tarValue / total) * 100);
            return `{value|${legenddata[1].value}}{tag| |}{value|${parseInt(p)}% }\n{title|${legenddata[1].name}}`
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    padding: [4, 0, 0, 0]
                },
                value: {
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)"
                },
                tag: {
                    color: "#68707F",
                    padding: 4
                }
            }
        },
    }, {
        x: '62%',
        y: '70%',
        icon: "circle",
        itemWidth: 6,
        itemHeight: 6,
        align: 'left',
        data: ['低时延'],
        formatter: function(name) {
            var data = legenddata;
            var total = 0;
            var tarValue;
            for (var i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    tarValue = data[i].value;
                }
            }
            var p = ((tarValue / total) * 100);
            return `{value|${legenddata[2].value}}{tag| |}{value|${parseInt(p)}% }\n{title|${legenddata[2].name}}`
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 12,
                    lineHeight: 15,
                    color: "rgba(255,255,255,0.5)",
                    padding: [4, 0]
                },
                value: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: "rgba(255,255,255,0.5)"
                },
                tag: {
                    color: "#68707F",
                    padding: 4
                }
            }
        },
    }],
    color: ['#4378EE', '#5ED7ED', '#8C5CFF'],
    series: [{
            name: '大带宽',
            type: 'pie',
            radius: [
                '80%', '92%'
            ],
            center: ['25%', '50%'],
            data: [{
                    value: 26,
                    name: '大带宽',
                    itemStyle: {
                        color: "#4378EE"
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    }
                },
                {
                    value: 20,
                    name: '广连接',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 12,
                    name: '低时延',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '广连接',
            type: 'pie',
            radius: [
                '80%', '84%'
            ],
            center: ['25%', '50%'],
            data: [{
                    value: 26,
                    name: '大带宽',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 20,
                    name: '广连接',
                    itemStyle: {
                        color: "#5ED7ED"
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    }
                },
                {
                    value: 12,
                    name: '低时延',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '低时延',
            type: 'pie',
            radius: [
                '80%', '84%'
            ],
            center: ['25%', '50%'],
            data: [{
                    value: 26,
                    name: '大带宽',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 20,
                    name: '广连接',
                    itemStyle: {
                        color: "transparent"
                    },
                },
                {
                    value: 12,
                    name: '低时延',
                    itemStyle: {
                        color: "#8C5CFF"
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    }
                }
            ]
        }
    ]
};


var charts = {
    lineX: ['4月', '4月5日', '4月10日', '4月15日', '4月20日', '4月25日', '5月', '5月5日', '5月10日', '5月15日', '5月20日', '5月25日', '6月', '6月5日', '6月10日', '6月15日', '6月20日', '6月25日', '7月', '7月5日', '7月10日', '7月15日', '7月20日', '7月25日', '8月', '8月5日', '8月10日', '8月15日', '8月20日', '8月25日', '9月', '9月5日', '9月10日', ],
    value: [
        [4, 6, 7, 8, 9, 10, 11, 12, 13, 12, 12, 12, 12, 11, 10, 10, 11, 10, 9, 8, 7, 8, 9, 11, 12, 13, 12, 11, 10, 12, 9, {
            value: 7,
            label: {
                show: true,
                fontSize: 12,
                color: "#fff",
                position: 'left',
                formatter: function(params) {
                    return '7个';
                }
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#4BDAE5',
                borderWidth: 2,
                borderColor: "#ffffff"
            },
        }, ],
        [4, 6, 7, 8, 9, 10, 11, 12, 13, 12, 12, 12, 12, 11, 10, 10, 11, 10, 9, 8, 7, 8, 9, 11, 12, 13, 12, 11, 10, 12, 9, {
            value: 7,
            label: {
                show: true,
                fontSize: 12,
                color: "#fff",
                position: 'left',
                formatter: function(params) {
                    return '7个';
                }
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#4BDAE5',
                borderWidth: 2,
                borderColor: "#ffffff"
            },
        }, ],
    ],
    markAreaDate: {
        silent: true,
        data: [
            [{
                xAxis: '8月10日'
            }, {
                xAxis: '9月10日'
            }]
        ],
        itemStyle: {
            color: 'rgba(72,129,247,0.25)'
        },
        // animationDuration: 3000,
        animationDurationUpdate: 5000,
    },
    markAreaDate2: {},
};
var barOption2 = {
    color: [{
        type: 'linear',
        colorStops: [{
            offset: 0,
            color: 'rgba(62,126,216,1)' // 0% 处的颜色
        }, {
            offset: 0.5,
            color: '#3F86D9' // 50% 处的颜色
        }, {
            offset: 1,
            color: '#4CDDE6' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }, {
        type: 'linear',
        colorStops: [{
            offset: 0,
            color: 'rgba(62,126,216,1)' // 0% 处的颜色
        }, {
            offset: 0.5,
            color: '#3F86D9' // 50% 处的颜色
        }, {
            offset: 1,
            color: '#4CDDE6' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }],
    // tooltip: {
    //     trigger: 'axis',
    //     textStyle: {
    //         color: '#fff'
    //     },
    //     padding: [10, 10],
    // },
    legend: {
        show: false,
    },
    grid: {
        top: 50,
        left: 10,
        right: 10,
        bottom: 0,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.5)"
            },
            show: true,
            margin: 15,
            interval: 5,
        },
        axisLine: {
            lineStyle: {
                color: "#5D606B"
            }
        },
        data: charts.lineX
    },
    yAxis: {
        name: '(个)       ',
        type: 'value',
        min: 0,
        max: 15,
        interval: 5,
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.5)"
            }
        },
        nameTextStyle: {
            color: "rgba(255,255,255,0.5)",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#5D606B",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: {
        type: 'line',
        name: '新增趋势',
        smooth: true,
        symbol: 'none',
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(62,126,216,0.2)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#3F86D9' // 50% 处的颜色
                    }, {
                        offset: 1,
                        color: '#4CDDE6' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)'
            }
        },
        markArea: charts.markAreaDate,
        animationDuration: 2000,
        // animationDurationUpdate: 5000,
        data: charts.value[0]
    },
    animation: false,
};


setInterval(() => {
    barChart2.clear();
    barOption2.animation = true;
    barOption2.series.data = barOption2.series.data === charts.value[1] ? charts.value[0] : charts.value[1];
    // barOption2.series.markArea = barOption2.series.markArea === charts.markAreaDate2 ? charts.markAreaDate2 : charts.markAreaDate2;
    barChart2.setOption(barOption2);
}, 5000)

let dataTemp = [
    [450, 453, 454, 455, 456, 458, ],
    [460, 461, 462, 463, 468, 466, ],
    [465, 470, 471, 475, 478, 477, ],
    [470, 477, 478, 479, 477, 480, ],
    [481, 480, 481, 482, 483, 484],
    [485, 486, 487, 488, 489, 490, ],
    [485, 490, 491, 492, 490, 495, ],
    [498, 496, 490, 496, 495, 498, ],
    [508, 510, 501, 506, 502, 506, ],
    [505, 504, 506, 508, 509, 508],
    [509, 510, 500, 509, 523, 510, ],
    [512, 535, 532, 456, 546, 514, ],
    [492, 480, 520, 489, 563, 516, ],
    [580, 529, 496, 460, 586, 515, ],
    [523, 510, 477, 470, 563, 520],
    [510, 509, 466, 489, 523, 521, ],
    [456, 468, 460, 460, 490, 525, ],
    [512, 480, 468, 483, 466, 526, ],
    [460, 526, 470, 490, 490, 528, ],
    [500, 468, 486, 540, 452, 530],
    [520, 456, 472, 506, 463, 526, ],
    [510, 470, 465, 453, 471, 520, ],
    [520, 489, 450, 500, 489, 516, ],
    [510, 476, 456, 536, 462, 525, ],
    [490, 480, 460, 490, 492, 521],
    [460, 516, 465, 536, 502, 525, ],
    [510, 470, 472, 490, 479, 516, ],
    [520, 510, 463, 520, 459, 506, ],
    [530, 486, 520, 456, 501, 495, ],
    [520, 500, 462, 502, 523, 458],
]
var barOption3 = {
    grid: {
        top: 50,
        left: 10,
        right: 10,
        bottom: 0,
        containLabel: true
    },
    xAxis: {
        data: ['4月', '5月', '6月', '7月', '8月', '9月'],
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#5D606B"
            }
        },
        z: 10
    },
    yAxis: {
        name: '(人)          ',
        nameTextStyle: {
            color: '#999',
        },
        nameLocation: 'end',
        max: 600,
        splitNumber: 3,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#5D606B",
            }
        },
    },
    series: function() {
        var series = [];
        for (var i = 0; i < 30; i++) {
            var item = {
                data: dataTemp[i],
                type: "bar",
                barCategoryGap: '0%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [
                            { offset: 0, color: '#36BBFF' },
                            { offset: 1, color: '#A282FF' }
                        ]
                    )
                },
                animationDelay: function(idx) {
                    return idx * 250;
                },
                zlevel: -1,
            };
            series.push(item);
            series[0].markArea = {
                silent: true,
                data: [
                    [{
                        x: '80%'
                    }, {
                        x: '98%'
                    }]
                ],
                itemStyle: {
                    color: 'rgba(72,129,247,0.25)'
                }
            }
        }
        return series;
    }.bind(this)(),
    animation: false,
    // animationEasing: 'elasticOut',
    animationDelayUpdate: function(idx) {
        return idx * 700;
    }
};
setInterval(() => {
    barChart3.clear();
    barOption3.animation = true;
    barOption3.series = barOption3.series;
    barChart3.setOption(barOption3);
}, 5000)


var charts2 = {
    lineX: ['4-20', '4月5日', '4月10日', '4月15日', '4月20日', '4月25日', '5-20', '5月5日', '5月10日', '5月15日', '5月20日', '5月25日', '6-20', '6月5日', '6月10日', '6月15日', '6月20日', '6月25日', '7-20', '7月5日', '7月10日', '7月15日', '7月20日', '7月25日', '8-20', '8月5日', '8月10日', '8月15日', '8月20日', '8月25日', '9-20', '9月5日', '9月10日', ],
    value: [
        [50, 51, 52, 53, 54, 55, 55, 55, 56, 58, 57, 55, 50, 52, 53, 55, 56, 54, 55, 56, 57, 58, 58, 59, 59, 60, 58, 58, 60, 61, 61, {
            value: 62,
            label: {
                show: true,
                fontSize: 12,
                color: "#fff",
                position: 'top',
                formatter: function(params) {
                    return '62MBPS';
                }
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#4BDAE5',
                borderWidth: 2,
                borderColor: "#ffffff"
            },
        }, ],
        [52, 53, 54, 55, 54, 56, 57, 58, 56, 56, 57, 55, 50, 52, 53, 55, 56, 54, 55, 56, 57, 58, 58, 59, 59, 60, 60, 61, 62, 63, 64, {
            value: 65,
            label: {
                show: true,
                fontSize: 12,
                color: "#fff",
                position: 'top',
                formatter: function(params) {
                    return '65MBPS';
                }
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#4BDAE5',
                borderWidth: 2,
                borderColor: "#ffffff"
            },
        }, ],
    ],
    markAreaDate: {
        silent: true,
        data: [
            [{
                xAxis: '8月10日'
            }, {
                xAxis: '9月10日'
            }]
        ],
        itemStyle: {
            color: 'rgba(72,129,247,0.25)'
        }
    },
};
var barOption4 = {
    grid: {
        top: 20,
        left: 5,
        right: 10,
        bottom: 0,
        containLabel: true
    },
    // tooltip: {
    //     trigger: 'axis'
    // },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.5)"
            },
            show: true,
            //margin: 15,
            interval: 5,
        },
        axisLine: {
            lineStyle: {
                color: "#5D606B"
            }
        },
        data: charts2.lineX,
    },
    yAxis: [{
        // name: '(个)       ',
        type: 'value',
        min: 0,
        max: 75,
        interval: 15,
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.5)"
            }
        },
        nameTextStyle: {
            color: "rgba(255,255,255,0.5)",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#5D606B",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    // visualMap: {
    //     type: 'piecewise',
    //     show: false,
    //     dimension: 1,
    //     zlevel: 5,
    //     pieces: [{
    //             lt: 15,
    //             gte: 0,
    //             color: '#ED5A56',
    //         },
    //         {
    //             gte: 15,
    //             color: '#4CDDE6',
    //         },
    //     ],
    // },
    series: {
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(62,126,216,0.4)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#3F86D9' // 50% 处的颜色
                    }, {
                        offset: 1,
                        color: '#4CDDE6' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)'
            }
        },
        // markArea: charts2.markAreaDate,
        // markLine: {
        //     symbol: "none",
        //     silent: true,
        //     data: [{
        //         name: '基线值',
        //         yAxis: 50,
        //         label: {
        //             show: 'true',
        //             position: 'middle',
        //             formatter: "基线值:50",
        //             color: "#5D606B",
        //         },
        //         lineStyle: {
        //             normal: {
        //                 width: 1,
        //                 type: "dashed",
        //                 color: "#5D606B",
        //             }
        //         }
        //     }]
        // },
        animationDuration: 2000,
        data: charts2.value[0],
    },
    animation: false,
};

setInterval(() => {
    barChart4.clear();
    barOption4.animation = true;
    barOption4.series.data = barOption4.series.data === charts2.value[1] ? charts2.value[0] : charts2.value[1];
    barChart4.setOption(barOption4);
}, 5000)





var barOption5 = {
    grid: {
        top: 20,
        left: 5,
        right: 10,
        bottom: 0,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: "#5D606B"
            }
        },
        data: ['7-01', '7-22', '8-12', '8-24', '9-14', '9-24']
    }],
    yAxis: [{
        // name: '(人)          ',
        nameTextStyle: {
            color: '#999',
        },
        nameLocation: 'end',
        min: 0,
        max: 8,
        interval: 2,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.5)"
            }
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "rgba(93,96,107,0.5)",
            }
        },
    }],
    series: [
        // {
        //     name: '现有趋势',
        //     type: 'line',
        //     lineStyle: {
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [
        //                 { offset: 0, color: '#4CDDE6' },
        //                 { offset: 1, color: '#3E7ED8' }
        //             ]
        //         )
        //     },
        //     smooth: true,
        //     itemStyle: {
        //         opacity: 0,
        //     },
        //     data: [4, 6, 46, 48, 45, 46, ],
        // },
        {
            name: '新增提示',
            type: 'bar',
            barWidth: 10,
            stack: '广告',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                        { offset: 0, color: '#34BEFF' },
                        { offset: 1, color: '#6365FF  ' }
                    ]
                )
            },
            data: [2, 3, 1, 1, 1, 2]
        },
        {
            name: '新增次要',
            type: 'bar',
            stack: '广告',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                        { offset: 0, color: '#E7B55B ' },
                        { offset: 1, color: '#F5CC94 ' }
                    ]
                )
            },
            data: [1, 2, 1, 1, 1, 1]
        },
        {
            name: '新增重要',
            type: 'bar',
            stack: '广告',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                        { offset: 0, color: '#E77C5B' },
                        { offset: 1, color: '#F5B394 ' }
                    ]
                )
            },
            data: [1, 2, 1, 1, 2, 1]
        },
        {
            name: '新增紧急',
            type: 'bar',
            stack: '广告',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                        { offset: 0, color: '#CD3838 ' },
                        { offset: 1, color: '#F95F5B  ' }
                    ]
                )
            },
            data: [2, 1, 1, 2, 2, 2]
        },

    ]
};

pieChart1.setOption(pieOption1);
barChart2.setOption(barOption2);
barChart3.setOption(barOption3);
barChart4.setOption(barOption4);
barChart5.setOption(barOption5);

window.addEventListener("resize", function() {
    pieChart1.resize();
    barChart2.resize();
    barChart3.resize();
    barChart4.resize();
    barChart5.resize();
})
$(document).ready(function() {

    $(".mapbg").animate({ opacity: "1" }, 1500);
    setTimeout(function() {
        $(".mapbg1").animate({ opacity: "1" }, 1500);
    }, 1500);
    setTimeout(function() {
        $(".dashboard-middle .site").animate({ opacity: "1" }, 1500);
    }, 3000);






    function waterFlow() {
        setTimeout(function() {
            $(".site6").delay(10).fadeTo("slow", 0);
            $(".site6-con").delay(10).fadeTo("slow", 1);
            setTimeout(function() {
                $(".site6").fadeTo("fast", 1);
                $(".site6-con").fadeTo("fast", 0);
                setTimeout(function() {
                    $(".site2").delay(10).fadeTo("slow", 0);
                    $(".site2-con").delay(10).fadeTo("slow", 1);
                    setTimeout(function() {
                        $(".site2").fadeTo("fast", 1);
                        $(".site2-con").fadeTo("fast", 0);
                        // setTimeout(function() {
                        //     $(".site3").delay(10).fadeTo("slow", 0);
                        //     $(".site3-con").delay(10).fadeTo("slow", 1);
                        //     setTimeout(function() {
                        //         $(".site3").fadeTo("fast", 1);
                        //         $(".site3-con").fadeTo("fast", 0);
                        //         setTimeout(function() {
                        //             $(".site1").delay(10).fadeTo("slow", 0);
                        //             $(".site1-con").delay(10).fadeTo("slow", 1);
                        //             setTimeout(function() {
                        //                 $(".site1").fadeTo("fast", 1);
                        //                 $(".site1-con").fadeTo("fast", 0);
                        //                 setTimeout(function() {
                        //                     $(".site8").delay(10).fadeTo("slow", 0);
                        //                     $(".site8-con").delay(10).fadeTo("slow", 1);
                        //                     setTimeout(function() {
                        //                         $(".site8").fadeTo("fast", 1);
                        //                         $(".site8-con").fadeTo("fast", 0);
                        //                         setTimeout(function() {
                        //                             $(".site2").delay(10).fadeTo("slow", 0);
                        //                             $(".site2-con").delay(10).fadeTo("slow", 1);
                        //                             setTimeout(function() {
                        //                                 $(".site2").fadeTo("fast", 1);
                        //                                 $(".site2-con").fadeTo("fast", 0);
                        //                                 setTimeout(function() {
                        //                                     $(".site4").delay(10).fadeTo("slow", 0);
                        //                                     $(".site4-con").delay(10).fadeTo("slow", 1);
                        //                                     setTimeout(function() {
                        //                                         $(".site4").fadeTo("fast", 1);
                        //                                         $(".site4-con").fadeTo("fast", 0);
                        //                                     }, 3000);
                        //                                 }, 3000);
                        //                             }, 3000);
                        //                         }, 3000);
                        //                     }, 3000);
                        //                 }, 3000);
                        //             }, 3000);
                        //         }, 3000);
                        //     }, 3000);
                        // }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 6000);
    };
    waterFlow();
    setInterval(waterFlow, 15000);

    var circle1 = $("#circle1");
    var circle2 = $("#circle2");
    var circle3 = $("#circle3");

    function runIt() {
        circle1.animate({
            top: '+=3'
        }, 900);
        circle1.animate({
            top: '-=3'
        }, 1000);
        circle2.animate({
            top: '+=3'
        }, 800);
        circle2.animate({
            top: '-=3'
        }, 1000);
        circle3.animate({
            top: '+=3'
        }, 850);
        circle3.animate({
            top: '-=3'
        }, 1100);
        circle1.animate("4000", runIt);
        circle2.animate("fast", runIt);
        circle3.animate("slow", runIt);
    }
    runIt();






});