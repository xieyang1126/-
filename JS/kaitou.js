/*
* @Author: yangyang
* @Date:   2017-10-10 14:48:31
* @Last Modified by:   yangyang
* @Last Modified time: 2017-10-16 16:22:23
*/

'use strict';

$(function(){
    // 关闭广告条
        $("#close").click(function(){
        $("#topbanner").fadeOut("slow");
            });

    // 下拉菜单
        $("#a1").mouseenter(function(){
            $(".h1-1").show();
        });
        $("#a1").mouseleave(function(){
            $(".h1-1").hide();
        });
        $("#a3").mouseenter(function(){
            $(".h2-1").show();
        });
        $("#a3").mouseleave(function(){
            $(".h2-1").hide();
        });
        $("#a4").mouseenter(function(){
            $(".h3-1").show();
        });
        $("#a4").mouseleave(function(){
            $(".h3-1").hide();
        });

    // 无限轮播
$(".square2>li").mouseenter(function () {
    $(this).addClass("current2").siblings("li").removeClass("current2");
    $(".imgs2>li").eq($(this).index()).fadeIn(500).siblings("li").fadeOut(500);
    index=$(this).index();
});
$(".inner2").mouseenter(function () {
    $("#left2").css("display","block");
    $("#right2").css("display","block");
    clearInterval(timer);
});
$(".inner2").mouseleave(function () {
    $("#left2").css("display","none");
    $("#right2").css("display","none");
    clearInterval(timer);
    timer = setInterval(rightsilde, 1200);
});
var timer = setInterval(rightsilde, 1200);
var index = 0;
var max0 = $(".imgs2")[0].children.length - 1;
$("#left2").click(function () {
    index--;
    if(index<0){
        index=7;
        $(".imgs2>li").eq(index).fadeIn(500).siblings("li").fadeOut(500);

    }
    $(".square2>li").eq(index).addClass("current2").siblings("li").removeClass("current2");
    $(".imgs2>li").eq(index).fadeIn(500).siblings("li").fadeOut(500);

});
$("#right2").click(rightsilde);
function rightsilde(){
    index++;
    if(index>max0){
        index=1;
        $(".imgs2>li").eq(index).fadeIn(500).siblings("li").fadeOut(500);

    }
    $(".square2>li").eq(index%8).addClass("current2").siblings("li").removeClass("current2");
    $(".imgs2>li").eq(index).fadeIn(500).siblings("li").fadeOut(500);

}

// 促销广告切换
        $(".neww>a").mouseenter(function(){
                $(".active:eq(0)").animate({left:($(this).index())*35},"fast");
              
                $(".bottom-new>div").eq($(this).index()).css("display","block").siblings("div").css("display","none");

            });

// 排行榜
        $(".phhead>a").mouseenter(function(){
                $(".hx:eq(0)").animate({left:($(this).index())*78+10},"fast");
              
                $(".phfoot>div").eq($(this).index()).css("display","block").siblings("div").css("display","none");

            });

// 底部小火箭
            $(window).scroll(function(){
                if($(window).scrollTop()>500){

                    $(".buttom:eq(0)").css("display","block");
                    
                }else{
                    $(".buttom:eq(0)").css("display","none");
                }

                if($(window).scrollTop()>900){

                    $(".sousuo1:eq(0)").css("display","block");
                    
                }else{
                    $(".sousuo1:eq(0)").css("display","none");
                }




            });




            $(".buttom").click(function(){
                $('html,body').animate({ scrollTop: 0 }, 0);
            });
// 左侧固定栏
            
            $(".zhongxin").click(function(){
                $('html,body').animate({ scrollTop: $(".lingquan").offset().top-52 }, 200);
            });

            $(".paihangbang").click(function(){
                $('html,body').animate({ scrollTop: $(".fbt").offset().top-52 }, 200);
            });
            $(".jingdong").click(function(){
                $('html,body').animate({ scrollTop: $(".zhongjian").offset().top }, 200);
            });
            $(".shouye").click(function(){
                $('html,body').animate({ scrollTop: $(".fs").offset().top-52 }, 200);
            });

            $(".fanhui").click(function(){
                $('html,body').animate({ scrollTop: 0 }, 200);
            });












// 倒计时
            var intDiff = parseInt(1160);//倒计时总秒数量
            function timer1(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show').html(day+"天");
    $('#821').html('<s id="h"></s>'+hour+'0');
    $('#822').html('<s></s>'+minute);
    $('#823').html('<s></s>'+second);
    intDiff--;
    }, 1000);
    } 
    $(function(){
    timer1(intDiff);
    });

// 中间展示
        


        
                $(".zhanshi:eq(0)").mouseenter(function(){
                $("#left3").show();
                $("#right3").show();
                });
                $(".zhanshi:eq(0)").mouseleave(function(){
                $("#left3").hide();
                $("#right3").hide();
                 });
                //秒杀左右滑动
                var index1=0;
                $("#left3").click(function () {
                index1--;
                if (index1 < 0) {
                $(".zhanshi1").css("left",-2 * 1000 + "px");
                index1 = 1;
                }
                $(".zhanshi1").animate({left:-index1 * 1000},"fast");
                })
                $("#right3").click(rightsilde1);
                function rightsilde1() {
                index1++;
                 if (index1 > 2) {
                $(".zhanshi1").css("left",0);
                index1 = 1;
         }
            $(".zhanshi1").animate({left:-index1 * 1000},"fast");
            }
            //秒杀图片上下浮动
            $(".active1").mouseenter(function(){
            $(this).animate({top:-4},"fast");
            });
        $(".active1").mouseleave(function () {
        $(this).animate({top:0},"fast");
            });




// 图片渐变

$(".square4>li").mouseenter(function () {
    $(this).addClass("current4").siblings("li").removeClass("current4");
    $(".you1>li").eq($(this).index()).fadeIn(1000).siblings("li").fadeOut(1000);
    index2=$(this).index();
});
$(".you:eq(0)").mouseover(function () {
    clearInterval(timer2);
});
$(".you:eq(0)").mouseout(function () {
    clearInterval(timer2);
    timer2 = setInterval(fadeinout, 1000);
});
var timer2 = setInterval(fadeinout, 1000);
var index2 = 0;
function fadeinout(){
    index2++;
    if(index2>1){
        index2=0;
        $(".you1>li").eq(index2).fadeIn(500).siblings("li").fadeOut(500);
    }
    $(".square4>li").eq(index2).addClass("current4").siblings("li").removeClass("current4");
    $(".you1>li").eq(index2).fadeIn(500).siblings("li").fadeOut(500);
}

// 图片透明
    $(".bianan1-2>img").mouseover(function(){
        $(this).animate({left:0,opacity:0.5},100);
    });

       $(".bianan1-2>img").mouseout(function(){
        $(this).animate({left:0,opacity:1},100);
    });

// 皮鞋移动
       $(".fa1-1-1>img").mouseover(function(){
            $(this).animate({right:15},"slow");
            });
        $(".fa1-1-1>img").mouseout(function () {
        $(this).animate({right:10},"slow");
            });  

// 会买专辑

$(".sup_ind>li").mouseenter(function () {
    $(this).addClass("abc").siblings("li").removeClass("abc");
    $(".sup_list>li").eq($(this).index()).fadeIn(500).siblings("li").fadeOut(500);
    index3=$(this).index();
});
$(".sub_tab:eq(0)").mousemove(function () {
    $("#left5").css("display","block");
    $("#right5").css("display","block");
    clearInterval(timer6);
});
$(".sub_tab:eq(0)").mouseout(function () {
    $("#left5").css("display","none");
    $("#right5").css("display","none");
    clearInterval(timer6);
    timer6 = setInterval(rightsilde3, 1600);
});
var timer6 = setInterval(rightsilde3, 1600);
var index3 = 0;
$("#left5").click(function () {
    index3--;
    if(index3<0){
        index3=2;
        $(".sup_list>li").eq(index3).fadeIn(500).siblings("li").fadeOut(500);

    }
    $(".sup_ind>li").eq(index3).addClass("abc").siblings("li").removeClass("abc");
    $(".sup_list>li").eq(index3).fadeIn(500).siblings("li").fadeOut(500);

});
$("#right5").click(rightsilde3);
function rightsilde3(){
    index3++;
    if(index3>3){
        index3=1;
        $(".sup_list>li").eq(index3).fadeIn(500).siblings("li").fadeOut(500);
    }
    $(".sup_ind>li").eq(index3%3).addClass("abc").siblings("li").removeClass("abc");
    $(".sup_list>li").eq(index3).fadeIn(500).siblings("li").fadeOut(500);
}       


// 领券
$(".done").mouseenter(function(){
    $(this).animate({right:-8},"fast");
});
$(".done").mouseleave(function () {
    $(this).animate({right:0},"fast");
});


// 觅
$(".mime_ind_list>li").mouseenter(function () {
    $(this).addClass("active5").siblings("li").removeClass("active5");
    $(".mime_list>li").eq($(this).index()).fadeIn(500).siblings("li").fadeOut(500);
    index14=$(this).index();
});


$(".box_bd1:eq(0)").mousemove(function () {
    $("#le").css("display","block");
    $("#ri").css("display","block");
    clearInterval(timer7);
});
$(".box_bd1:eq(0)").mouseout(function () {
    $("#le").css("display","none");
    $("#ri").css("display","none");
    clearInterval(timer7);
    timer7 = setInterval(rightsilde4, 1200);
});
var timer7 = setInterval(rightsilde4, 1200);
var index14 = 0;
var max1 = $(".mime_list")[0].children.length - 1;
$("#le").click(function () {
    index14--;
    if(index14<0){
        $(".mime_list>li").eq(index14).fadeIn(500).siblings("li").fadeOut(500);
        index14=4;
    }
    $(".mime_ind_list>li").eq(index14).addClass("active5").siblings("li").removeClass("active5");
    $(".mime_list>li").eq(index14).fadeIn(500).siblings("li").fadeOut(500);

});
$("#ri").click(rightsilde4);
function rightsilde4(){
    index14++;
    if(index14>max1){
        index14=1;
        $(".mime_list>li").eq(index14).fadeIn(500).siblings("li").fadeOut(500);

    }
    $(".mime_ind_list>li").eq(index14%5).addClass("active5").siblings("li").removeClass("active5");
    $(".mime_list>li").eq(index14).fadeIn(500).siblings("li").fadeOut(500);

}








});