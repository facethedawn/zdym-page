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
    },
    onLeave: function(index, nextIndex, direction) {
      let aim = nextIndex.index
      if (aim == 1) {
        $('.two').addClass('ani')
      }else {
        $('.two').removeClass('ani')
      }
    }
  });

  $('.three ul li').mouseover(function() {
    $('.three ul li').removeClass('active')
    $(this).addClass('active')
  })

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

    $('.one p').css({
      width: 727 * propoH,
      fontSize: 24 * propoH,
      left: 123 * propoH,
      paddingLeft: 20 * propoH,
      lineHeight: 30 * propoH + 'px',
      top: 530 * propoH
    })

    $('.one .classifyWrap').css({
      left: 123 * propoH,
      bottom: 220 * propoH
    })

    $('.one .ballAll').css({
      width: 374 * propoH,
      height: 357 * propoH,
      top: 166 * propoH,
      right: 358 * propoH
    })

    $('.one .ballAll .b1').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.one .ballAll .b2').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.one .ball2').css({
      width: 83 * propoH,
      height: 84 * propoH,
      bottom: 352 * propoH,
      left: 722 * propoH
    })

    $('.one .ball3').css({
      width: 53 * propoH,
      height: 53 * propoH,
      top: 700 * propoH,
      right: 250 * propoH
    })

    $('.two .content').css({
      width: 1440 * propoH
    })

    $('.two .content h1').css({
      fontSize: 70 * propoH,
      paddingTop: 200 * propoH,
      marginBottom: 40 * propoH
    })

    $('.two .content .subTitle').css({
      width: 1000 * propoH,
      paddingTop: 36 * propoH,
      paddingBottom: 36 * propoH,
      fontSize: 36 * propoH,
      lineHeight: 40 * propoH + 'px',
      paddingTop: 34 * propoH,
      paddingBottom: 34 * propoH,
      marginBottom: 94 * propoH
    })

    $('.two .content ul').css({
      marginBottom: 106 * propoH
    })

    $('.two .content ul li').css( {
      // margin: 0 45px;
      width: 577 * propoH,
      marginLeft: 45 * propoH,
      marginRight: 45 * propoH,
    })

    $('.two .content ul li.l p').css({
      lineHeight: 34 * propoH
    })

    $('.two .content ul li p').css({
      fontSize: 18 * propoH,
      width: 520 * propoH,
      marginLeft: 50 * propoH,
      lineHeight: 30 * propoH + 'px'
    })

    $('.two .content ul li span').css({
      width: 24 * propoH,
      height: 33 * propoH
    })

    $('.two .bottomWord').css({
      fontSize: 16 * propoH
    })

    $('.mouseWrap').css({
      left: 156 * propoH,
      bottom: 70 * propoH
    })
  }
})