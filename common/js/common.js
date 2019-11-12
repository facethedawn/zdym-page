(function() {
  $(function() {
    (function(){
      $('.common-header .content .top-item-wrap .top-item').mouseover(function() {
        $(this).find('.second-wrap').addClass('show')
      }).mouseleave(function() {
        $(this).find('.second-wrap').removeClass('show')
      })

      $(window).scroll(function() {
        console.log(new Date())
      })
    })()
  })
})()