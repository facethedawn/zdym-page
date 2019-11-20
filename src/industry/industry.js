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
        height:3 * propoH
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
        lineHeight: 86 * propoH + 'px'
    })

    $('.industry_wrap .one p').css({
        fontSize: 48 * propoH,
        lineHeight: 60 * propoH + 'px'
    })

    $('.industry_wrap .one .detailInfo').css({
        fontSize: 24 * propoH,
        paddingTop: 20 * propoH,
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
        height:wH
    })

    $('.industry_wrap .industryContent h1').css({
        fontSize: 60 * propoH,
        marginLeft:600 * propoH
    })

    $('.industry_wrap .industryContent h1 img').css({
        widht: 90 * propoH,
        height: 90 * propoH
    })

    $('.industry_wrap .industryContent p').css({
        width: 667 * propoH,
        marginRight:400 * propoH,
        marginTop:30 * propoH
    })
    
    $('.industry_wrap .industryContent p span').css({
        left:-18 * propoH,
        top:10 * propoH,
        width: 8 *propoH,
        height: 56 * propoH
    })

    $('.industry_wrap .industryContent .introImg').css({
        width:1103 * propoH,
        height:423 * propoH,
        marginTop:100 * propoH
    })

    $('.industry_wrap .industryContent p').css({
        fontSize: 24 * propoH,
        lineHeight: 30 * propoH + 'px'
    })
    }
  })