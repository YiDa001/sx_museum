$(function () {
    var myChart1 = echarts.init(document.getElementById('visitor_flowrate1'));
    var option1 = {
        title:{
            text:'单位：人',
            left:'right',
            textStyle:{
                color:'#fff',
                fontSize:13,
                fontWeight:400
            }
        },
        tooltip: {
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:'8%',
            left: '3%',
            right: '15%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            splitLine:{show: false},
            type: 'value',
            show:false,
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        yAxis: {
            splitLine:{show: false},
            type: 'category',
            data: ['花中君子','南张北溥','走进非洲','马克思展厅','回望百年'],
            axisLine:{
                show:false
            },
            axisTick:{       //y轴刻度线
                show:false
            },
            axisLabel: {
                color: "#fff",
                textStyle: {
                    fontSize:15,
                    color: '#fff'
                },
                interval: 0,
                formatter: function(value) {
                    if (value.length > 4) {
                        return value.substring(0, 4) + "...";
                    } else {
                        return value;
                    }
                }
            }
        },
        series: [
            {
                type: 'bar',
                data: [23685, 20236, 18253,12231,5681],
                barWidth: 22,
                textStyle:{
                    fontSize:18
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize:15,
                                color: '#fff'
                            }
                        }
                    }
                }
            }
        ]

    };
    myChart1.setOption(option1);

    var myChart2 = echarts.init(document.getElementById('visitor_flowrate2'));
    var option2 = {
        title:{
            text:'单位：人',
            left:'right',
            textStyle:{
                color:'#fff',
                fontSize:13,
                fontWeight:400
            }
        },
        tooltip: {
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:'8%',
            left: '3%',
            right: '15%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            splitLine:{show: false},
            type: 'value',
            show:false,
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        yAxis: {
            splitLine:{show: false},
            type: 'category',
            data: ['壮丽三峡','远古巴渝','重庆：城市之路','抗战岁月','汉代雕塑艺术'],
            axisLine:{
                show:false
            },
            axisTick:{       //y轴刻度线
                show:false
            },
            axisLabel: {
                color: "#fff",
                textStyle: {
                    fontSize:15,
                    color: '#fff'
                },
                interval: 0,
                formatter: function(value) {
                    if (value.length > 4) {
                        return value.substring(0, 4) + "...";
                    } else {
                        return value;
                    }
                }
            }
        },
        series: [
            {
                type: 'bar',
                data: [8563, 12365, 23451,3265,15632],
                barWidth: 22,
                textStyle:{
                    fontSize:15
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize:15,
                                color: '#fff'
                            }
                        }
                    }
                }
            }
        ]

    };
    myChart2.setOption(option2);
    
    var myChart3 = echarts.init(document.getElementById('visitor_flowrate3'));
    var option3 = {
        title:{
            text:'单位：人',
            left:'right',
            textStyle:{
                color:'#fff',
                fontSize:13,
                fontWeight:400
            }
        },
        tooltip: {
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:'8%',
            left: '3%',
            right: '15%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            splitLine:{show: false},
            type: 'value',
            show:false,
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        yAxis: {
            splitLine:{show: false},
            type: 'category',
            data: ['历代瓷器','历代书画','西南名族民俗风情','李初梨捐献文物','高罗佩私人收藏文物展'],
            axisLine:{
                show:false
            },
            axisTick:{       //y轴刻度线
                show:false
            },
            axisLabel: {
                color: "#fff",
                textStyle: {
                    fontSize:15,
                    color: '#fff'
                },
                interval: 0,
                formatter: function(value) {
                    if (value.length > 4) {
                        return value.substring(0, 4) + "...";
                    } else {
                        return value;
                    }
                }
            }
        },
        series: [
            {
                type: 'bar',
                data: [18563, 2365, 13451,7265,25632],
                barWidth: 22,
                textStyle:{
                    fontSize:18
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize:15,
                                color: '#fff'
                            }
                        }
                    }
                }
            }
        ]
    };
    myChart3.setOption(option3);
    /*屏幕分辨率自适应*/
    if (screen.width>=1366&&screen.width<=1440){
        option1.title.textStyle.fontSize = 10;           //副标题字体
        option1.yAxis.axisLabel.textStyle.fontSize = 13; //Y轴字体
        option1.series[0].barWidth = 18;                 //条形宽度
        option1.series[0].itemStyle.normal.label.textStyle.fontSize = 13; //数字大小
        myChart1.setOption(option1);
        option2.title.textStyle.fontSize = 10;           //副标题字体
        option2.yAxis.axisLabel.textStyle.fontSize = 13; //Y轴字体
        option2.series[0].barWidth = 18;                 //条形宽度
        option2.series[0].itemStyle.normal.label.textStyle.fontSize = 13; //数字大小
        myChart2.setOption(option2);
        option3.title.textStyle.fontSize = 10;           //副标题字体
        option3.yAxis.axisLabel.textStyle.fontSize = 13; //Y轴字体
        option3.series[0].barWidth = 18;                 //条形宽度
        option3.series[0].itemStyle.normal.label.textStyle.fontSize = 13; //数字大小
        myChart3.setOption(option3);
    }else if(screen.width>=1680){
        option1.title.textStyle.fontSize = 13;           //副标题字体
        option1.yAxis.axisLabel.textStyle.fontSize = 16; //Y轴字体
        option1.series[0].barWidth = 22;                 //条形宽度
        option1.series[0].itemStyle.normal.label.textStyle.fontSize = 15; //数字大小
        myChart1.setOption(option1);
        option2.title.textStyle.fontSize = 13;           //副标题字体
        option2.yAxis.axisLabel.textStyle.fontSize = 16; //Y轴字体
        option2.series[0].barWidth = 22;                 //条形宽度
        option2.series[0].itemStyle.normal.label.textStyle.fontSize = 15; //数字大小
        myChart2.setOption(option2);
        option3.title.textStyle.fontSize = 13;           //副标题字体
        option3.yAxis.axisLabel.textStyle.fontSize = 16; //Y轴字体
        option3.series[0].barWidth = 22;                 //条形宽度
        option3.series[0].itemStyle.normal.label.textStyle.fontSize = 15; //数字大小
        myChart3.setOption(option3);
    }
});
