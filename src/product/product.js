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
          height: 3 * propoH
      })

      $('.product_wrap .product_text').css({
        paddingLeft: 110 * propoH,
        paddingTop: 180 * propoH
      })
      
      $('.product_wrap h3').css({
        fontSize: 72 * propoH,
        lineHeight: 86 * propoH + 'px'
      })

      $('.product_wrap p').css({
        fontSize: 48 * propoH,
        lineHeight: 60 * propoH + 'px'
      })
    
      $('.product_wrap .detailInfo').css({
        fontSize: 24 * propoH,
        lineHeight: 40 * propoH + 'px',
        paddingTop: 20 * propoH
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
    }
});