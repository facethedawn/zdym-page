$(function(){
  
  indexInit()

  $(window).resize(function () {
    indexInit()
    indexSwiper.update( )
  })


  var indexSwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect : 'fade',
    initialSlide: 0,
    on: {
      slideChangeTransitionStart: function(){
        // alert(this.activeIndex);
        console.log(this.realIndex)
        var aim = this.realIndex;

        if(aim == 0) {
          $('.index-banner').css({
            backgroundColor: '#dcae45'
          })
          $('.index-banner h1').text('Healthcare')
          $('.index-banner h2').text('Big Data')
          $('.index-banner h4 b').text('About Us')
          $('.index-banner .info h3').text('Vision | Mission | Value proposition')
          $('.index-banner .info p').text('Big data analytics and technology innovation company focused around improving human health.')
        }else if (aim == 1) {
          $('.index-banner').css({
            backgroundColor: '#78acb0'
          })
          $('.index-banner h1').text('Products')
          $('.index-banner h2').text('& Services')
          $('.index-banner h4 b').text('Product')
          $('.index-banner .info h3').text('We rely on big data analytics, cloud computing and artificial intelligence in our suite of healthcare')
          $('.index-banner .info p').text('Technology solutions to ensure our customers have the best data and insights .')
        }else if (aim == 2) {
          $('.index-banner').css({
            backgroundColor: '#c9162a'
          })
          $('.index-banner h1').text('Technology')
          $('.index-banner h2').text('Analytics')
          $('.index-banner h4 b').text('Technology')
          $('.index-banner .info h3').text('Next generation healthcare & life')
          $('.index-banner .info p').text('healthcare & life science analytics architecture built from the ground-up to support customer success in the big data era.')
        }else if (aim == 3) {
          $('.index-banner').css({
            backgroundColor: '#70544f'
          })
          $('.index-banner h1').text('Industry')
          $('.index-banner h2').text('Sectors and Services')
          $('.index-banner h4 b').text('Industry')
          $('.index-banner .info h3').text('Pharma | Medical Device | Insurance | Hospital')
          $('.index-banner .info p').text('We support clients on launch support, effective brand promotion.')
        }
        
        $('.index-banner .swiper-wrap .pagi li').removeClass('active')
        $('.index-banner .swiper-wrap .pagi li').eq(aim).addClass('active')
        
      },
      slideNextTransitionStart: function() {
        $('.index-banner h1, .index-banner h2').removeClass('aniL aniR')
        setTimeout(function() {
          $('.index-banner h1, .index-banner h2').addClass('aniR')
        }, 30)
      },
      slidePrevTransitionStart: function() {
        $('.index-banner h1, .index-banner h2').removeClass('aniL aniR')
        setTimeout(function() {
          $('.index-banner h1, .index-banner h2').addClass('aniL')
        }, 30)
      },
      click: function() {
        $('.index-banner .shadowWrap').css({
          visibility: 'visible',
          width: wW,
          height: wH,
          top:0,
          opacity:1,
          borderTopLeftRadius: 0
        })
        $('.index-banner .shadowWrap li').css({
          top: 115
        })
      }
    }
  })

  $('.index-banner .swiper-wrap .direction li.prev').click(function() {
    indexSwiper.slidePrev()
  })
  $('.index-banner .swiper-wrap .direction li.next').click(function() {
    indexSwiper.slideNext()
  })


       












  function indexInit() {
    var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var propoH = wH / 1080
    var propoW = wW / 1920
    console.log(wH,wW)
    console.log(window)
  
    $('.index-banner').css({
      width: wW,
      height: wH
    })
    $('.swiper-wrap').css({
      top: 115 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container, .index-banner .swiper-wrap .swiper-container .bg').css({
      width: 1493 * propoH,
      height: 768 * propoH
    })
    
    // 第一个swiper的第一个球
    $('.index-banner .swiper-wrap .swiper-container .one .ball1').css({
      top: 90 * propoH,
      right: 120 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container .one .ball1 .b,.index-banner .swiper-wrap .swiper-container .one .ball1 .l').css({
      width: 375 * propoH,
      height: 357 * propoH
    })
    // 第一个swiper的第二个球
    $('.index-banner .swiper-wrap .swiper-container .one .ball2').css({
      top: 380 * propoH,
      left: 300 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })
    // 第一个swiper的第三个球
    $('.index-banner .swiper-wrap .swiper-container .one .ball3').css({
      top: 114 * propoH,
      left: 80 * propoH,
      width: 53 * propoH,
      height: 53 * propoH
    })

    // 第二个swiper的第一个球
    $('.index-banner .swiper-wrap .swiper-container .two .ball1').css({
      top: 164 * propoH,
      right: 227 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container .two .ball1 .b,.index-banner .swiper-wrap .swiper-container .two .ball1 .l').css({
      width: 375 * propoH,
      height: 357 * propoH
    })
    // 第二个swiper的第二个球
    $('.index-banner .swiper-wrap .swiper-container .two .ball2').css({
      top: 350 * propoH,
      left: 300 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })
    // 第二个swiper的第三个球
    $('.index-banner .swiper-wrap .swiper-container .two .ball3').css({
      top: 114 * propoH,
      left: 80 * propoH,
      width: 53 * propoH,
      height: 53 * propoH
    })


    // 第三个swiper的第一个球
    $('.index-banner .swiper-wrap .swiper-container .three .ball1').css({
      top: 164 * propoH,
      right: 100 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container .three .ball1 .b,.index-banner .swiper-wrap .swiper-container .three .ball1 .l').css({
      width: 375 * propoH,
      height: 357 * propoH
    })
    // 第三个swiper的第二个球
    $('.index-banner .swiper-wrap .swiper-container .three .ball2').css({
      top: 350 * propoH,
      left: 430 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })
    // 第三个swiper的第三个球
    $('.index-banner .swiper-wrap .swiper-container .three .ball3').css({
      top: 90 * propoH,
      left: 250 * propoH,
      width: 53 * propoH,
      height: 53 * propoH
    })
    
    // 第三个swiper的第一个球
    $('.index-banner .swiper-wrap .swiper-container .three .ball1').css({
      top: 164 * propoH,
      right: 100 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container .three .ball1 .b,.index-banner .swiper-wrap .swiper-container .three .ball1 .l').css({
      width: 375 * propoH,
      height: 357 * propoH
    })
    // 第三个swiper的第二个球
    $('.index-banner .swiper-wrap .swiper-container .three .ball2').css({
      top: 350 * propoH,
      left: 430 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })
    // 第三个swiper的第三个球
    $('.index-banner .swiper-wrap .swiper-container .three .ball3').css({
      top: 90 * propoH,
      left: 250 * propoH,
      width: 53 * propoH,
      height: 53 * propoH
    })


    // 第四个swiper的第一个球
    $('.index-banner .swiper-wrap .swiper-container .four .ball1').css({
      top: 136 * propoH,
      right: 302 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container .four .ball1 .b,.index-banner .swiper-wrap .swiper-container .four .ball1 .l').css({
      width: 375 * propoH,
      height: 357 * propoH
    })
    // 第四个swiper的第二个球
    $('.index-banner .swiper-wrap .swiper-container .four .ball2').css({
      top: 142 * propoH,
      left: 275 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })
    // 第四个swiper的第四个球
    $('.index-banner .swiper-wrap .swiper-container .four .ball3').css({
      top: 476 * propoH,
      left: 1145 * propoH,
      width: 53 * propoH,
      height: 53 * propoH
    })

    // 最大的标题
    $('.index-banner h1').css({
      fontSize: 155 * propoH,
      top: 250 * propoH,
      left: 150 * propoH
    })

    // 第二大的标题
    $('.index-banner h2').css({
      fontSize: 132 * propoH,
      top: 430 * propoH,
      left: 150 * propoH
    })

    // 最小的标题
    $('.index-banner h4').css({
      top: 206 * propoH,
      left: 161 * propoH,
      fontSize: 20 * propoH
    })
    $('.index-banner h4 span').css({
      marginTop: 9 * propoH,
      marginRight: 24 * propoH,
      width: 48 * propoH,
      height: 3 * propoH
    })

    // 每个slider的简介 
    $('.index-banner .info').css({
      width: 386 * propoH,
      top: 650 * propoH,
      left: 460 * propoH
    })
    
    // 控制swiper的方向
    $('.index-banner .swiper-wrap .direction').css({
      bottom: -23 * propoH,
      left: 50 * propoH
    })

    // 社交分享
    $('.index-banner .swiper-wrap .share').css({
      right: 28 * propoH,
      top: 350 * propoH
    })

    // swiper 右下角的指示
    $('.index-banner .swiper-wrap .pagi').css({
      right: 37 * propoH,
      bottom: 22 * propoH
    })
    $('.index-banner .swiper-wrap .pagi li').css({
      width: 6 * propoH,
      height: 42 * propoH,
      marginLeft: 10 * propoH
    })

  }
  


})