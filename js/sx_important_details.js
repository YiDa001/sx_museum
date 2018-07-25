$(function () {
	// 达标率
    // 3D模型
    var model_width1 = $('#model_box').width()+"px";
    var model_height1 = $('#model_box').height()+"px";
    new Vue({
        el: '#model_box',
        data: {
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            position:{
                x: 0,
                y: 0,
                z: 0
            },
            scale:{
                x: 0.9,
                y: 0.9,
                z: 0.9
            },
            run:"",
            model_width:model_width1,
            model_height:model_height1
        },
        methods: {
            onLoad :function() {
                this.rotate();
            },
            rotate :function() {
                this.rotation.y += 0.01;
                this.run=requestAnimationFrame( this.rotate );
            },
            stopRotation:function(){
                cancelAnimationFrame(this.run)
            }
        }
    });
    var standardRate = echarts.init(document.getElementById('standardRate'));
    var gaugeOption = {
        tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
		},
		series: [
			{
				name: '环境',
				center: ['50%', '55%'],
				radius: '70%',
				type: 'gauge',
				data: [{value: 0, name: '达标率'}],
				axisTick: {
					show: false
				},
				pointer: {
					width: 4
				},
				axisLine: {
					lineStyle: {
						width: 10,
						color: [[0.6, '#e83428'],[0.8, '#0d6fb8'], [1, '#14ae67']]
						// color: [[0.2, '#14ae67'], [0.8, '#0d6fb8'], [1, '#e83428']]
					}
				},
				splitLine: {
					length: 8
				},
				detail: {
					width: 48,
					height: 17,
					textStyle: {
						fontSize: 14
					},
					formatter: '{value}%',
					offsetCenter: [0, '23%']
				},
				title: {
					textStyle: {
						color: '#9fa6ac',
						fontSize: 12
					}
				}
			}
		]
    };
    //特征数据，馆藏数据
    var data_left_height = $('.data_font_left').height();
    var data_right_height = $('.data_font_right').height();
    if(data_left_height>=data_right_height){
        $('.data_font_right').height(data_left_height);
    }else {
        $('.data_font_left').height(data_right_height);
    }
    setInterval(function () {
        gaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        standardRate.setOption(gaugeOption, true);
    },2000);
    // 污染物
    var parameter = echarts.init(document.getElementById('parameter'));
    var radarOption = {
        title: {
            // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar:[
            {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#72828d',
                        // backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '二氧化碳', max: 6500},
                    { name: '温度', max: 16000},
                    { name: '相对湿度', max: 30000},
                    { name: '有机污染物', max: 38000},
                    { name: '无机污染物', max: 52000},
                    { name: '含硫污染物', max: 25000}
                ],
                radius: 70
            }
        ],
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: {
                normal: {
                    color: 'green',
                    opacity: '0.3'
                }

            },
            itemStyle: {
                normal: {
                    color: '#72828d'
                }
            },
            data : [
                {
                    value : [6500, 16000, 30000, 38000, 52000, 25000],
                    // name : '预算分配（Allocated Budget）'
                },
                {
                    value : [6500, 16000, 30000, 38000, 52000, 25000],
                    // name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    parameter.setOption(radarOption, true);
    //相似文物跑马灯效果
    var li_num = $('.similar_relic_img').length;        //图片个数，方便计算ul宽度
    var ul_width = li_num*(192+25)+'px';
    $('.view_front').width(ul_width);                   //算出ul宽度
    $('.relic_move').width(li_num*(192+25)*2+'px');     //算出跑马灯移动栏宽度
    $('.view_behind').html($('.view_front').html());    //生成第二个ul，使移动过程中能平滑切换
    var relic_move_num = 0;
    function relic_move() {
        // console.log(Math.abs(parseInt($('.relic_move').css('left'))));
        if(Math.abs(parseInt($('.relic_move').css('left')))>=parseInt(ul_width)){
            relic_move_num = 0;                         //当移动完一个移动栏宽度后，左偏移量归零
            $('.relic_move').css('left',0);
        }else{
            relic_move_num++;                           //未移动完一个移动栏宽度，则持续移动
            $('.relic_move').css('left',-1*relic_move_num)
        }
    }
    var relic_move_time = setInterval(relic_move,20);
    $('.relic_view_box').hover(function () {
        clearInterval(relic_move_time);
    },function () {
        relic_move_time = setInterval(relic_move,20);
    })
    // 地图散点图
    var data = [
        {name: '重庆三峡博物馆', value: "../img/history1.jpg"},
        {name: '重庆市巫山县', value: "../img/detail_vase.png"},
        {name: '重庆市潼南县', value: "../img/detail_vase.png"},
    ];
    var geoCoordMap  = {
        '海门':[121.15,31.89],
        '鄂尔多斯':[109.781327,39.608266],
        '招远':[120.38,37.35],
        '舟山':[122.207216,29.985295],
        '齐齐哈尔':[123.97,47.33],
        '盐城':[120.13,33.38],
        '赤峰':[118.87,42.28],
        '青岛':[120.33,36.07],
        '乳山':[121.52,36.89],
        '金昌':[102.188043,38.520089],
        '泉州':[118.58,24.93],
        '莱西':[120.53,36.86],
        '日照':[119.46,35.42],
        '胶南':[119.97,35.88],
        '南通':[121.05,32.08],
        '拉萨':[91.11,29.97],
        '云浮':[112.02,22.93],
        '梅州':[116.1,24.55],
        '文登':[122.05,37.2],
        '上海':[121.48,31.22],
        '攀枝花':[101.718637,26.582347],
        '威海':[122.1,37.5],
        '承德':[117.93,40.97],
        '厦门':[118.1,24.46],
        '汕尾':[115.375279,22.786211],
        '潮州':[116.63,23.68],
        '丹东':[124.37,40.13],
        '太仓':[121.1,31.45],
        '曲靖':[103.79,25.51],
        '烟台':[121.39,37.52],
        '福州':[119.3,26.08],
        '瓦房店':[121.979603,39.627114],
        '即墨':[120.45,36.38],
        '抚顺':[123.97,41.97],
        '玉溪':[102.52,24.35],
        '张家口':[114.87,40.82],
        '阳泉':[113.57,37.85],
        '莱州':[119.942327,37.177017],
        '湖州':[120.1,30.86],
        '汕头':[116.69,23.39],
        '昆山':[120.95,31.39],
        '宁波':[121.56,29.86],
        '湛江':[110.359377,21.270708],
        '揭阳':[116.35,23.55],
        '荣成':[122.41,37.16],
        '连云港':[119.16,34.59],
        '葫芦岛':[120.836932,40.711052],
        '常熟':[120.74,31.64],
        '东莞':[113.75,23.04],
        '河源':[114.68,23.73],
        '淮安':[119.15,33.5],
        '泰州':[119.9,32.49],
        '南宁':[108.33,22.84],
        '营口':[122.18,40.65],
        '惠州':[114.4,23.09],
        '江阴':[120.26,31.91],
        '蓬莱':[120.75,37.8],
        '韶关':[113.62,24.84],
        '嘉峪关':[98.289152,39.77313],
        '广州':[113.23,23.16],
        '延安':[109.47,36.6],
        '太原':[112.53,37.87],
        '清远':[113.01,23.7],
        '中山':[113.38,22.52],
        '昆明':[102.73,25.04],
        '寿光':[118.73,36.86],
        '盘锦':[122.070714,41.119997],
        '长治':[113.08,36.18],
        '深圳':[114.07,22.62],
        '珠海':[113.52,22.3],
        '宿迁':[118.3,33.96],
        '咸阳':[108.72,34.36],
        '铜川':[109.11,35.09],
        '平度':[119.97,36.77],
        '佛山':[113.11,23.05],
        '海口':[110.35,20.02],
        '江门':[113.06,22.61],
        '章丘':[117.53,36.72],
        '肇庆':[112.44,23.05],
        '大连':[121.62,38.92],
        '临汾':[111.5,36.08],
        '吴江':[120.63,31.16],
        '石嘴山':[106.39,39.04],
        '沈阳':[123.38,41.8],
        '苏州':[120.62,31.32],
        '茂名':[110.88,21.68],
        '嘉兴':[120.76,30.77],
        '长春':[125.35,43.88],
        '胶州':[120.03336,36.264622],
        '银川':[106.27,38.47],
        '张家港':[120.555821,31.875428],
        '三门峡':[111.19,34.76],
        '锦州':[121.15,41.13],
        '南昌':[115.89,28.68],
        '柳州':[109.4,24.33],
        '三亚':[109.511909,18.252847],
        '自贡':[104.778442,29.33903],
        '吉林':[126.57,43.87],
        '阳江':[111.95,21.85],
        '泸州':[105.39,28.91],
        '西宁':[101.74,36.56],
        '宜宾':[104.56,29.77],
        '呼和浩特':[111.65,40.82],
        '成都':[104.06,30.67],
        '大同':[113.3,40.12],
        '镇江':[119.44,32.2],
        '桂林':[110.28,25.29],
        '张家界':[110.479191,29.117096],
        '宜兴':[119.82,31.36],
        '北海':[109.12,21.49],
        '西安':[108.95,34.27],
        '金坛':[119.56,31.74],
        '东营':[118.49,37.46],
        '牡丹江':[129.58,44.6],
        '遵义':[106.9,27.7],
        '绍兴':[120.58,30.01],
        '扬州':[119.42,32.39],
        '常州':[119.95,31.79],
        '潍坊':[119.1,36.62],
        '重庆':[106.54,29.59],
        '台州':[121.420757,28.656386],
        '南京':[118.78,32.04],
        '滨州':[118.03,37.36],
        '贵阳':[106.71,26.57],
        '无锡':[120.29,31.59],
        '本溪':[123.73,41.3],
        '克拉玛依':[84.77,45.59],
        '渭南':[109.5,34.52],
        '马鞍山':[118.48,31.56],
        '宝鸡':[107.15,34.38],
        '焦作':[113.21,35.24],
        '句容':[119.16,31.95],
        '北京':[116.46,39.92],
        '徐州':[117.2,34.26],
        '衡水':[115.72,37.72],
        '包头':[110,40.58],
        '绵阳':[104.73,31.48],
        '乌鲁木齐':[87.68,43.77],
        '枣庄':[117.57,34.86],
        '杭州':[120.19,30.26],
        '淄博':[118.05,36.78],
        '鞍山':[122.85,41.12],
        '溧阳':[119.48,31.43],
        '库尔勒':[86.06,41.68],
        '安阳':[114.35,36.1],
        '开封':[114.35,34.79],
        '济南':[117,36.65],
        '德阳':[104.37,31.13],
        '温州':[120.65,28.01],
        '九江':[115.97,29.71],
        '邯郸':[114.47,36.6],
        '临安':[119.72,30.23],
        '兰州':[103.73,36.03],
        '沧州':[116.83,38.33],
        '临沂':[118.35,35.05],
        '南充':[106.110698,30.837793],
        '天津':[117.2,39.13],
        '富阳':[119.95,30.07],
        '泰安':[117.13,36.18],
        '诸暨':[120.23,29.71],
        '郑州':[113.65,34.76],
        '哈尔滨':[126.63,45.75],
        '聊城':[115.97,36.45],
        '芜湖':[118.38,31.33],
        '唐山':[118.02,39.63],
        '平顶山':[113.29,33.75],
        '邢台':[114.48,37.05],
        '德州':[116.29,37.45],
        '济宁':[116.59,35.38],
        '荆州':[112.239741,30.335165],
        '宜昌':[111.3,30.7],
        '义乌':[120.06,29.32],
        '丽水':[119.92,28.45],
        '洛阳':[112.44,34.7],
        '秦皇岛':[119.57,39.95],
        '株洲':[113.16,27.83],
        '石家庄':[114.48,38.03],
        '莱芜':[117.67,36.19],
        '常德':[111.69,29.05],
        '保定':[115.48,38.85],
        '湘潭':[112.91,27.87],
        '金华':[119.64,29.12],
        '岳阳':[113.09,29.37],
        '长沙':[113,28.21],
        '衢州':[118.88,28.97],
        '廊坊':[116.7,39.53],
        '菏泽':[115.480656,35.23375],
        '合肥':[117.27,31.86],
        '武汉':[114.31,30.52],
        '大庆':[125.03,46.58],
        '重庆三峡博物馆':[106.55,29.57],
        '重庆市巫山县':[109.88,31.08],
        '重庆市潼南县':[105.83,30.18],
    };
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var heatMapDiv = echarts.init(document.getElementById('heatMapDiv'));
    var uploadedDataURL = "../js/china.json";
    $.get(uploadedDataURL, function(d){
        echarts.registerMap('china', d);
        option = {
            geo:{
                map:"china",
                roam: true,
                label: {
                    normal: {
                        show: true,//显示省份标签
                        textStyle:{color:"#c71585"}//省份标签字体颜色
                    },
                    emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#800080"}
                    }
                },
                itemStyle: {
                    normal: {
                        // borderWidth: .5,//区域边框宽度
                        borderColor: '#009fe8',//区域边框颜色
                        areaColor:"#ffefd5"//区域颜色
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#4b0082',
                        areaColor:"#ffdead"
                    }
                },
                data:[
                    {name:'福建', selected:true}//福建为选中状态
                ]
            },
            tooltip: {
                trigger: 'item',
                padding:0,
                borderWidth:0,
                position:"top"
            },
            formatter: function (data) {
                return "<img src='"+data.value[2]+"' style='width:126px;height:253px;'>";
            },
            series: [{
                name: '销量',
                type: 'scatter',
                coordinateSystem: 'geo', // series坐标系类型
                data: convertData(data),
                label: {
                    normal: {
                        // show: true
                    },
                    emphasis: {
                        // show: true
                    }
                },
                symbol:'pin',
                symbolSize:[20,20],
            }],
        };
        if (option && typeof option === "object")
        {
            // var startTime = +new Date();
            heatMapDiv.setOption(option, true);
            // var endTime = +new Date();
            // var updateTime = endTime - startTime;
            // console.log("Time used:", updateTime);
        }
    });

    heatMapDiv.on('georoam', function (params) {//缩放时触发
        // 控制台打印数据的名称
        console.log(params);
    });
    // 文物出土信息
   var history_up_width= $(".history_up").length*$(".history_up").width()+($(".history_up").length-1)*200+280;
   var history_down_width= $(".history_down").length*$(".history_down").width()+($(".history_down").length-1)*240+90;
   if(history_up_width>=history_down_width){//比较文物出图信息上下元素的宽度大小
       $(".history_up_out").width(history_up_width);//赋值较大的宽度
       $(".history_down_out").width(history_up_width);
   }else{
       $(".history_up_out").width(history_down_width);//赋值较大的宽度
       $(".history_down_out").width(history_down_width);
   }
});