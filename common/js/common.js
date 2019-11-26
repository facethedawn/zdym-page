(function() {
  $(function() {
    (function(){
      $('.common-header .content .top-item-wrap .top-item').mouseover(function() {
        $('.common-header .content .top-item-wrap .top-item').removeClass('active')
        $(this).find('.second-wrap').addClass('show')
      }).mouseleave(function() {
        $(this).find('.second-wrap').removeClass('show')
      })

      init()

      $(window).scroll(function() {
        let aim = $(window).scrollTop();
        
        init()

        if(aim > 200) {
          $('.common-header').addClass('other')
        }else {
          $('.common-header').removeClass('other')
        }
      })


      function init() {
        var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var propoH = wH / 1080
        var propoW = wW / 1920


        $('.common-classify li').css({
          fontSize: 16 * propoH,
          marginRight: 20 * propoH
        })

        $('.common-classify li a').css({
          paddingTop: 10 * propoH,
          paddingBottom: 10 * propoH,
          paddingLeft: 14 * propoH,
          paddingRight: 14 * propoH
        })

        $('.common-header .logo1, .common-header .logo2').css({
          marginLeft: 100 * propoH,
        })

        $('.common-header .content .contact').css({
          marginRight: 68 * propoH
        })

        $('.common-header .content .lang').css({
          marginLeft: 70 * propoH
        })

        $('.common-header .content .top-item-wrap .top-item').css({
          marginLeft: 16 * propoH,
          marginRight: 16 * propoH
        })


        // 社交分享
        $('.share').css({
          right: 38 * propoH,
          marginTop: -44 * propoH
        })
      }
    })()
  })
})()