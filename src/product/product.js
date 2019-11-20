$(function(){
    initPage()
    $(window).resize(function() {
      initPage()
    })
    
    function initPage() {
        var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var propoH = wH / 1080
        var propoW = wW / 1920

        $('.product_wrap').css({
            width: wW,
            height: wH
        })

        $('.product_wrap h4').css({
            fontSize: 20 * propoH
        })

        $('.product_wrap h4 span').css({
            marginTop: 9 * propoH,
            marginRight: 24 * propoH,
            width: 48 * propoH,
            height: 2 * propoH
        })

        $('.product_wrap .product_text').css({
            paddingLeft: 110 * propoH,
            paddingTop: 180 * propoH
        })
        
        $('.product_wrap h3').css({
            fontSize: 72 * propoH,
            lineHeight: 86 * propoH + 'px',
            marginTop:25 * propoH
        })

        $('.product_wrap p').css({
            fontSize: 48 * propoH,
            lineHeight: 60 * propoH + 'px',
            paddingTop: 20 * propoH
        })
        
        $('.product_wrap .detailInfo').css({
            fontSize: 24 * propoH,
            lineHeight: 40 * propoH + 'px',
            paddingTop: 40 * propoH
        })

        $('.product_nav').css({
            left: 110 * propoH,
            bottom: 110 * propoH
        })

        $('.product_nav li').css({
            marginRight:20 * propoH
        })

        $('.product_nav li a').css({
            fontSize: 16 * propoH,
            borderRadius:12 * propoH,
            paddingLeft: 24 * propoH,
            paddingRight: 24 * propoH
        })

        $('.product_ball_01').css({
            left: 524 * propoW,
            top:160 * propoH,
            width: 70 * propoH,
            height: 70 * propoH
        })

        $('.product_ball_02').css({
            left: 1106 * propoW,
            top:400 * propoH,
            width: 100 * propoH,
            height: 100 * propoH
        })

        $('.tech_ball_01').css({
            left: 590 * propoW,
            top:150 * propoH,
            width: 70 * propoH,
            height: 70 * propoH
        })

        $('.tech_ball_02').css({
            left: 1324 * propoW,
            top:618 * propoH,
            width: 100 * propoH,
            height: 100 * propoH
        })
    }
});