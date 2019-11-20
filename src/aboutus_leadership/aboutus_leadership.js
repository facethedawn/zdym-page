$(function() {
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
      fontSize: 18 * propoH,
    })

    $('.one .tag span').css({
      width: 48 * propoH,
      height: 3 * propoH,
      marginTop: 6 * propoH,
      marginRight: 18 * propoH
    })

    $('.one p').css({
      width: 727 * propoH,
      fontSize: 24 * propoH,
      left: 123 * propoH,
      paddingLeft: 20 * propoH,
      lineHeight: 30 * propoH + 'px'
    })
    
    $('.one .classifyWrap').css({
      left: 123 * propoH,
      bottom: 220 * propoH
    })

    $('.one .ballAll').css({
      width: 374 * propoH,
      height: 357 * propoH,
      top: 166 * propoH,
      right: 328 * propoH
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
      right: 222 * propoH
    })

    $('.one .ball3').css({
      width: 53 * propoH,
      height: 53 * propoH,
      top: 200 * propoH,
      left: 500 * propoH
    })
  }
})