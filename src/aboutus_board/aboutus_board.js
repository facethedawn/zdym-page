$(function(){
  $('#fullpage').fullpage({
		navigation: true,
	  navigationPosition: 'left',
		autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin, destination, direction) {
      let aim = destination.index
      if (aim == 0) {
        $('.one').addClass('ani')
        $('.common-header').removeClass('other')
      }else {
        $('.one').removeClass('ani')
        $('.common-header').addClass('other')
      }
       if (aim == 1) {
        $('.two').addClass('ani')
      }else {
        $('.two').removeClass('ani')
      }
    }
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


    $('.one h1').css({
      fontSize: 128 * propoH,
      left: 112 * propoH,
      top: 240 * propoH
    })

    
    $('.one h2').css({
      width: 600 * propoH,
      fontSize: 36 * propoH,
      lineHeight: 50 * propoH + 'px',
      top: 388 * propoH,
      left: 123 * propoH,
    })

    $('.one .tag').css({
      top: 194 * propoH,
      left: 123 * propoH,
      fontSize: 18 * propoH
    })

    $('.one .tag span').css({
      width: 48 * propoH,
      height: 2 * propoH,
      marginTop: 6 * propoH,
      marginRight: 18 * propoH,
    })

    $('.one .classifyWrap').css({
      left: 123 * propoH,
      bottom: 220 * propoH
    })

    $('.one .ballAll').css({
      width: 374 * propoH,
      height: 357 * propoH,
      top: 244 * propoH,
      right: 430 * propoH
    })

    $('.one .ballAll .b1, .one .ballAll .b2').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.one .ball2').css({
      width: 83 * propoH,
      height: 84 * propoH,
      bottom: 194 * propoH,
      left: 760 * propoH,
    })
    
    $('.one .ball3').css({
      width: 53 * propoH,
      height: 53 * propoH,
      top: 200 * propoH,
      left: 540 * propoH,
    })

    $('.two .content').css({
      width: 1440 * propoH
    })

    $('.two .content .top').css({
      width: 1314 * propoH,
      height: 350 * propoH,
      marginLeft: -657 * propoH,
      marginTop: -395 * propoH,
    })

    $('.two .content .top .blc').css({
      width: 247 * propoH,
      height: 350 * propoH
    })

    $('.two .content .top .info').css({
      marginLeft: 50 * propoH,
      width: 940 * propoH
    })

    $('.two .content .top .info h1').css({
      fontSize: 70 * propoH,
      marginTop: 60 * propoH,
      marginBottom: 20 * propoH
    })

    $('.two .content .top .info h3').css({
      width: 940 * propoH,
      fontSize: 30 * propoH,
      marginBottom: 20 * propoH,
    })

    $('.two .content .top .info p').css({
      fontSize: 16 * propoH,
      lineHeight: 26 * propoH + 'px'
    })

    $('.two .content .bottom').css({
      marginLeft: -657 * propoH,
      marginTop: 45 * propoH,
      width: 1314 * propoH,
      height: 350 * propoH
    })

    $('.two .content .bottom .info').css({
      width: 940 * propoH,
      marginRight: 45 * propoH
    })

    $('.two .content .bottom .info h1').css({
      fontSize: 70 * propoH,
      marginTop: 60 * propoH,
      marginBottom: 20 * propoH
    })

    $('.two .content .bottom .info h3').css({
      width: 940 * propoH,
      fontSize: 30 * propoH,
      marginBottom: 20 * propoH
    })

    $('.two .content .bottom .info p').css({
      fontSize: 16 * propoH,
      lineHeight: 26 * propoH + 'px'
    })

    $('.two .content .bottom .blc').css({
      width: 247 * propoH,
      height: 350 * propoH
    })

    $('.mouseWrap').css({
      left: 156 * propoH,
      bottom: 70 * propoH
    })
  }
})