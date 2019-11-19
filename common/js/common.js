(function() {
  $(function() {
    (function(){
      $('.common-header .content .top-item-wrap .top-item').mouseover(function() {
        $(this).find('.second-wrap').addClass('show')
      }).mouseleave(function() {
        $(this).find('.second-wrap').removeClass('show')
      })

      $(window).scroll(function() {
        let aim = $(window).scrollTop();

        if(aim > 200) {
          $('.common-header').addClass('other')
          $('.common-header .logo2').show()
          $('.common-header .logo1').hide()
        }else {
          $('.common-header').removeClass('other')
          $('.common-header .logo1').show()
          $('.common-header .logo2').hide()
        }
      })
    })()
  })
})()