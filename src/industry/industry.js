$(function(){
    $('#fullpage').fullpage({
          navigation: true,
        navigationPosition: 'left',
          autoScrolling:true,
          scrollHorizontally: true
    });
    initPage()
    $(window).resize(function() {
      initPage()
    })
    
    function initPage() {
      var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var propoH = wH / 1080
      var propoW = wW / 1920
  
    $('.industry_wrap .one h4').css({
        fontSize: 20 * propoH
    })

    $('.industry_wrap .one h4 span').css({
        marginTop:9 * propoH,
        marginRight:24 * propoH,
        width:48 * propoH,
        height:2 * propoH
    })

    $('.industry_wrap .one h4').css({
        fontSize: 20 * propoH
    })

    $('.industry_wrap .one .product_text').css({
        left: 110 * propoH,
        top:180 * propoH
    })

    $('.industry_wrap .one h3').css({
        fontSize: 72 * propoH,
        lineHeight: 86 * propoH + 'px',
        marginTop:25 * propoH
    })

    $('.industry_wrap .one p').css({
        fontSize: 48 * propoH,
        paddingTop: 20 * propoH,
        lineHeight: 60 * propoH + 'px'
    })

    $('.industry_wrap .one .detailInfo').css({
        fontSize: 24 * propoH,
        paddingTop: 40 * propoH,
        lineHeight: 40 * propoH + 'px'
    })
    
    $('.industry_wrap .one .industry_nav').css({
        left: 110 * propoH,
        bottom:110 * propoH
    })

    $('.industry_wrap .one .industry_nav li').css({
        height: 36 * propoH,
        marginRight: 20 * propoH
    })
    
    $('.industry_wrap .one .industry_nav li a').css({
        fontSize: 16 * propoH,
        paddingLeft:24 * propoH,
        paddingRight:24 * propoH,
        borderRadius:12 * propoH,
        lineHeight:36 * propoH+ 'px'
    })

    $('.industry_wrap .one .industry_nav li').css({
        paddingTop:105 * propoH
    })

    $('.industry_wrap .industryContent').css ({
        width:1100 * propoH,
        height:wH
    })

    $('.industry_wrap .industryContent h1').css({
        fontSize: 60 * propoH,
        marginTop:130 * propoH,
        widht: 500 * propoH,
        height: 300 * propoH
    })

    $('.industry_wrap .industryTopList_1 h1 img').css({
        widht: 90 * propoH,
        height: 90 * propoH
    })

    $('.industry_wrap .industryTopList_2 h1 img').css({
        widht: 100 * propoH,
        height: 64 * propoH
    })

    $('.industry_wrap .industryContent p').css({
        width: 667 * propoH,
        marginTop:130 * propoH
    })
    
    $('.industry_wrap .industryContent p span').css({
        left:-28 * propoH,
        top:10 * propoH,
        width: 8 *propoH,
        height: 56 * propoH
    })

    $('.industry_wrap .industryTopList_1 .introImg').css({
        width:1100 * propoH,
        height:423 * propoH,
        marginTop:100 * propoH
    })

    $('.industry_wrap .industryContent p').css({
        fontSize: 24 * propoH,
        lineHeight: 30 * propoH + 'px'
    })

    $('.industry_wrap .industryTopList_2').css ({
        width:1300 * propoH
    })
    

    $('.industry_wrap .industryTopList_2 .left').css({
        width:300 * propoH
    })

    $('.industry_wrap .industryTopList_2 h1 img').css({
        width:100 * propoH,
        height:64 * propoH
    })

    $('.industry_wrap .industryTopList_2 .introImg').css({
        width:748 * propoH,
        height:567 * propoH,
        marginTop:150 * propoH
    })

    $('.industry_wrap .industryTopList_3').css ({
        width:1300 * propoH
    })

    $('.industry_wrap .industryTopList_3 .introImg').css({
        width:786 * propoH,
        height:580 * propoH,
        marginTop:150 * propoH
    })

    $('.industry_wrap .industryTopList_3 .right').css ({
        width:400 * propoH
    })

    $('.industry_wrap .industryTopList_3 h1 img').css({
        width:90 * propoH,
        height:80 * propoH
    })

    $('.industry_wrap .industryTopList_4 h1').css({
        marginLeft:100 * propoH
    })
    $('.industry_wrap .industryTopList_4 p').css({
        width: 570 * propoH
    })
    // 
    $('.industry_wrap .industryTopList_4 .introImg').css({
        width:889 * propoH,
        height:196 * propoH,
        marginTop:150 * propoH
    })

    $('.industry_wrap .industryTopList_4 .hr_dash').css({
        marginTop:80 * propoH,
        marginBottom:80 * propoH
    })

    $('.industry_wrap .industryTopList_4 p').css({
        marginTop:220 * propoH
    })

    $('.industry_wrap .industryTopList_5 .introImg').css({
        width:1086 * propoH,
        height:302 * propoH
    })

    $('.industry_wrap .industryTopList_5 .hr_dash').css({
        marginTop:90 * propoH,
        marginBottom:80 * propoH
    })

    $('.industry_wrap .industryTopList_5 p').css({
        marginTop:220 * propoH
    })

    $('.industry_wrap .industryTopList_6 p').css({
        marginTop:-100 * propoH
    })

    $('.industry_wrap .industryTopList_6 h1 img').css({
        width:90 * propoH,
        height:90 * propoH
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
  })