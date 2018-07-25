$(function () {
    $("#fullPageDiv").fullpage({//fullpage.js的初始配置
        paddingTop: '100px',//顶部100px内间距
        verticalCentered:false,//内容不居中
        afterLoad:function(anchorLink, index){
                if(index==1){

                }
                if(index==3){

                }
                //滚动某一屏，导航栏对应添加样式
                $(".sx_nav_ul li a").removeClass("nav_active").eq(index-1).addClass("nav_active");
         }
    });
    /*文物基本信息*/
    //导航栏跳转
    $(".sx_nav_ul li a").click(function () {
        $(".sx_nav_ul li a").removeClass("nav_active");//移除其他导航标签的选中样式
        $(this).addClass("nav_active");//当前标签添加选中样式
        var nav_item=$(this).parents("li").index();//获取被点击元素父元素的下标
        //滚动到网站的被选中对应的屏
        $.fn.fullpage.moveTo((nav_item+1), 0);//
    });
    //数字滚动
    var num_roll = $('.basic_info_top .counter');
    setTimeout(function () {
        num_roll.eq(0).html('271300');
        num_roll.eq(1).html('1268000');
        num_roll.eq(2).html('26022');
        num_roll.eq(3).html('10028');
        $('.counter').counterUp();
    },1500);
    //特展人流量
    var my_echarts = $('.basic_info_middle .right .content');
    //echarts宽高自适应
    my_echarts.width($('.basic_info_middle .right').width()*1);
    my_echarts.height($('.basic_info_middle .right').height()*0.61);
    var page_num= 1;
    //下一页
    $('#next_page').click(function () {
        page_num++;
        $('#page_num').html(page_num);      //显示当前页码
        for(var i=0;i<3;i++){
            my_echarts.eq(i).hide();         //隐藏所有echarts
        }
        my_echarts.eq(page_num-1).show();    //显示当前echarts
        $('#last_page').show();             //显示上一页按钮
        if(page_num>=3){
            $(this).hide();                 //下一页按钮隐藏
        }
    });
    //上一页
    $('#last_page').click(function () {
        page_num--;
        $('#page_num').html(page_num);
        for(var i=0;i<3;i++){
            my_echarts.eq(i).hide();
        }
        my_echarts.eq(page_num-1).show();
        $('#next_page').show();
        if(page_num<=1){
            $(this).hide();
        }
    });
    //视频mask层跟随鼠标进入事件
    $('.basic_info_bottom ul li').mouseMove('.mask');
    //视频
    var video_src =['../video/video1.mp4','../video/video2.mp4','../video/video1.mp4','../video/video2.mp4'];
    var video_play =$('.basic_info_bottom ul li img');
    video_play.click(function(){
        videoPlay($(this),video_src);
    });
    function videoPlay(e,src) {
        $.fn.fullpage.setAllowScrolling(false);             //禁止页面滚动
        $('.video_play_mask').fadeIn(1000);
        var index = e.parent().index();
        //在容器中添加<video>及播放插件相关方法
        $('.video_play_container .video').append('<video></video>'+ '<script>plyr.setup();</script>');
        $('.video_play_container .video video').attr('src',src[index]);  //播放对应的视频
        $('.video_close').click(function () {
            $.fn.fullpage.setAllowScrolling(true);      //启用页面滚动
            $('.video_play_mask').hide();
            $('.video_play_container .video').empty();  //移除div类名为video所有子节点,相当于重置video
        });
    }
    /*环境信息*/
    // 环境信息的环境场轮播
    var liItem=0;//表示当前显示环境场的下标，默认第一个
    var envSiteLen=$(".env_site_play ul li").length;
    $(".env_left_btn").click(function () {//环境场向左切换
        liItem++;
        if(liItem==4){
            liItem=0;
        }
        $(".env_site_play ul").css("left",-liItem*100+"%");
        $(".env_site_nav a").css("color","#b6b6b6");//还原下方文字的字体颜色
        $(".env_site_nav a").eq(liItem).css("color","#ffffff");//添加对应焦点文字的样式
    });
    $(".env_right_btn").click(function () {//环境场向右切换
        liItem--;
        if(liItem==-1){
            liItem=3;
        }
        $(".env_site_play ul").css("left",-liItem*100+"%");
        $(".env_site_nav a").css("color","#b6b6b6");//还原下方文字的字体颜色
        $(".env_site_nav a").eq(liItem).css("color","#ffffff");//添加对应焦点文字的样式
    });
    $(".env_site_nav a").click(function () {
        liItem=$(this).index();//获取被点中的元素相对应的场
        $(".env_site_play ul").css("left",-liItem*100+"%");
        $(".env_site_nav a").css("color","#b6b6b6");
        $(this).css("color","#ffffff");
    });
    /*重点文物信息*/
    //文物走马灯播放效果
    var show_li=$("#show_one li").length;
    var show_li_width = $("#show_one li").width();
    var show_li_margin = parseInt($("#show_one li").css("margin-right"));
    $(".important_relics_img ul").css("width",show_li*(show_li_width+show_li_margin)+"px");//动态设置ul的宽度
    var runNum=0;//控制容器不停移动的计数
    var runTime="";//申明一个定时器
    var runUlWidth=$(".important_relics ul").width();//容器ul的width
    $(".important_relics_img").width(runUlWidth*2);//设置放置图片外层容器宽度
    $("#show_two").html($("#show_one").html());//复制第一个容器的所有图片,到第二个容器中
    function importantRun(){
        //当元素偏移量滚动完一个容器宽度时，left值归零，达到无缝跑马灯效果
        if($("#show_one").width()-Math.abs(parseInt($(".important_relics_img").css("left")))<=0){
            runNum=0;
            $(".important_relics_img").css("left",0);
        }else{
            runNum++;
            $(".important_relics_img").css("left",-1*runNum);
        }
    };
    runTime=setInterval(importantRun,30);
    $(".important_relics_show").hover(function () {//鼠标移入停止跑马灯动画
        clearInterval(runTime);
    },function () {//鼠标移除，启动跑马灯动画
        runTime=setInterval(importantRun,20);
    });
    //修复进度完成显示
    var total_width = $('.important_relics_info .schedule_bg').width();
    $('.important_relics_info .schedule').each(function () {
        if($(this).width()==total_width){
            $(this).next('i').show();           //宽度达到100%，当前的下一个元素(i标签)显示，i标签默认隐藏
        }else{
            $(this).next('i').hide();
        }
    });
    // 创意文物信息
    // 视频播放，同文物基本信息的视频播放
    var creative_video_src =['../video/video1.mp4','../video/video2.mp4'];
    var creative_video_play =$('.creative_video_play');
    creative_video_play.click(function () {
        videoPlay($(this),creative_video_src);
    });
    // 热力场
    /*屏幕分辨率自适应*/

});
