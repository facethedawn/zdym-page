$(function(){
  var isClick = false
  
  indexInit()

  var indexSwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect : 'fade',
    speed: 600,
    initialSlide: 0,
    on: {
      slideChangeTransitionStart: function(){
        // alert(this.activeIndex);
        var aim = this.realIndex;
        if(aim == 0) {
          $('.index-banner').css({
            backgroundColor: '#dcae45'
          })
          $('.index-banner').css({
            // backgroundColor: 'red'
          })
          $('.shadowWrap').css({
            backgroundColor: "#fab72a"
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
          $('.shadowWrap').css({
            backgroundColor: "#73b9bb"
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
          $('.shadowWrap').css({
            backgroundColor: "#de2039"
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
          $('.shadowWrap').css({
            backgroundColor: "#816059"
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
        var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var propoH = wH / 1080
        var propoW = wW / 1920
        isClick = true
        $('.index-banner .shadowWrap').css({
          visibility: 'visible',
          width: wW,
          height: wH,
          top:0 * propoH,
          opacity:1,
          borderTopLeftRadius: 0
        })
        $('.index-banner .shadowWrap>li').hide()
        $('.index-banner .shadowWrap>li').eq(this.realIndex).show().css({
          top: 115 * propoH
        })

        $('.secondNav ul').hide()
        $('.secondNav ul').eq(this.realIndex).fadeIn()

        $('.index-banner h1').css({
          left: 124
        })
        $('.index-banner h2').css({
          left: 124
        })
        $('.index-banner .info').css({
          left: 138
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

  $(window).resize(function () {
    indexInit()
    indexSwiper.update()
    console.log(aim)
    var aim = indexSwiper.realIndex
    var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var propoH = wH / 1080
    var propoW = wW / 1920
    if(isClick) {
      $('.index-banner .shadowWrap').css({
        visibility: 'visible',
        width: wW,
        height: wH,
        top:0 * propoH,
        opacity:1,
        borderTopLeftRadius: 0
      })
    }
    $('.index-banner h1').css({
      left: 124
    })
    $('.index-banner h2').css({
      left: 124
    })
    $('.index-banner .info').css({
      left: 138
    })
    if(aim == 0) {
      $('..index-banner .swiper-wrap .swiper-container .swiper-slide').css({
        backgroundColor: '#dcae45'
      })
    }else if(aim == 1) {
      $('..index-banner .swiper-wrap .swiper-container .swiper-slide').css({
        backgroundColor: '#78acb0'
      })
    }else if(aim == 2) {
      $('..index-banner .swiper-wrap .swiper-container .swiper-slide').css({
        backgroundColor: '#c9162a'
      })
    }else if(aim == 3) {
      $('..index-banner .swiper-wrap .swiper-container .swiper-slide').css({
        backgroundColor: '#70544f'
      })
    }
  })


       












  function indexInit() {
    var wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var propoH = wH / 1080
    var propoW = wW / 1920
  
    $('.index-banner').css({
      width: wW,
      height: wH
    })
    $('.swiper-wrap').css({
      top: 115 * propoH
    })
    $('.index-banner .swiper-wrap .swiper-container, .index-banner .swiper-wrap .swiper-container .bg').css({
      width: Math.floor(1493 * propoH),
      height: Math.floor(768 * propoH)
    })
    let haha =  100
    $('.index-banner .swiper-wrap .swiper-container .swiper-slide').css("cssText",'width:'+ haha +'px !important');
    
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
      left: 180 * propoH,
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
      left: 180 * propoH,
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
      width: 50 * propoH,
      height: 2 * propoH
    })

    // 每个slider的简介 
    $('.index-banner .info').css({
      width: 450 * propoH,
      top: 620 * propoH,
      left: 460 * propoH
    })
    
    // 控制swiper的方向
    $('.index-banner .swiper-wrap .direction').css({
      bottom: -23 * propoH,
      left: 50 * propoH
    })

    $('.index-banner .swiper-wrap .direction li').css({
      width: 48 * propoH,
      height: 48 * propoH,
      lineHeight: 48 * propoH + 'px',
    })

    $('.index-banner .swiper-wrap .direction li i').css({
      marginTop: 16 * propoH,
      fontSize: 18 * propoH
    })

    // 社交分享
    $('.index-banner .swiper-wrap .share').css({
      right: 38 * propoH,
      top: 350 * propoH
    })

    // swiper 右下角的指示
    $('.index-banner .swiper-wrap .pagi').css({
      right: 37 * propoH,
      bottom: 22 * propoH
    })
    $('.index-banner .swiper-wrap .pagi li').css({
      width: Math.floor( 5 * propoH),
      height: 40 * propoH,
      marginLeft: 8 * propoH
    })

    
    $('.shadowWrap').css({
      width: 1493 * propoH,
      height: 768 * propoH,
      top: 115 * propoH
    })
    
    $('.shadowWrap .one .bg,.shadowWrap .two .bg,.shadowWrap .three .bg,.shadowWrap .four .bg').css({
      width: 1920 * propoH,
      height: 858 * propoH
    })
    
    // 假的第一个slider
    $('.index-banner .shadowWrap li.one .ball1').css({
      top: 90 * propoH,
      right: 120 * propoH
    })

    $('.index-banner .shadowWrap li.one .ball1 .b').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.one .ball1 .l').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.one .ball2').css({
      top: 381 * propoH,
      left: 728 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })

    $('.index-banner .shadowWrap li.one .ball3').css({
      top: 113 * propoH,
      left: 507 * propoH,
      height: 53 * propoH,
      width: 53 * propoH
    })
    


    // 假的第二个slider
    $('.index-banner .shadowWrap li.two .ball1').css({
      top: 164 * propoH,
      right: 227 * propoH
    })

    $('.index-banner .shadowWrap li.two .ball1 .b').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.two .ball1 .l').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.two .ball2').css({
      top: 350 * propoH,
      left: 730 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })

    $('.index-banner .shadowWrap li.two .ball3').css({
      top: 114 * propoH,
      left: 608 * propoH,
      height: 53 * propoH,
      width: 53 * propoH
    })


    // 假的第三个slider
    $('.index-banner .shadowWrap li.three .ball1').css({
      top: 164 * propoH,
      right: 100 * propoH
    })

    $('.index-banner .shadowWrap li.three .ball1 .b').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.three .ball1 .l').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.three .ball2').css({
      top: 350 * propoH,
      left: 858 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })

    $('.index-banner .shadowWrap li.three .ball3').css({
      top: 90 * propoH,
      left: 678 * propoH,
      height: 53 * propoH,
      width: 53 * propoH
    })


    // 假的第四个slider
    $('.index-banner .shadowWrap li.four .ball1').css({
      top: 136 * propoH,
      right: 302 * propoH
    })

    $('.index-banner .shadowWrap li.four .ball1 .b').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.four .ball1 .l').css({
      width: 374 * propoH,
      height: 357 * propoH
    })

    $('.index-banner .shadowWrap li.four .ball2').css({
      top: 142 * propoH,
      left: 702 * propoH,
      width: 83 * propoH,
      height: 84 * propoH
    })

    $('.index-banner .shadowWrap li.four .ball3').css({
      top: 476 * propoH,
      left: 1572 * propoH,
      height: 53 * propoH,
      width: 53 * propoH
    })

    $('.mouseWrap').css({
      left: 156 * propoH,
      bottom: 70 * propoH
    })

    $('.index-banner .bottomWord').css({
      bottom: 60 * propoH,
      right: 53 * propoH
    })

    $('.index-banner .bottomWord li').css({
      fontSize: 14 * propoH,
      paddingLeft: Math.floor(30 * propoH),
      paddingRight: Math.floor(30 * propoH)
    })

    $('.classifyWrap').css({
      top: 682 * propoH,
      left: 138 * propoH
    })

    $('.secondNav').css({
      left: 138,
      bottom: 200 * propoH
    })

    


  }
  


})