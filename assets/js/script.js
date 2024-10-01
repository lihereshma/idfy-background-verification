/* Author: Reshma Lihe */

jQuery(document).ready(function($) {

  $('.youtube-container').on('click', function() {
    var videoId = $(this).find('.youtube-thumbnail').data('id');
    
    // Create the iframe element
    var iframe = $('<iframe>', {
      src: "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0",
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      allowfullscreen: true,
      frameborder: 0,
      css: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }
    });
    
    // Clear the current content and add the iframe
    $(this).html(iframe);
    
    // Ensure the container expands to show the iframe
    $(this).css({
      'padding-bottom': '56.25%', // 16:9 aspect ratio
      'height': '0',
      'position': 'relative',
      'overflow': 'hidden'
    });
  });
  

  // Sticky Header
  $(window).scroll(function(){
    var sticky = $('header'),
      scroll = $(window).scrollTop();
  
    if(scroll >= 100) {
      sticky.addClass('fixed');
    } else {
      sticky.removeClass('fixed');
    }      
  });

  // Logos Slider
  $(".logos-slider").slick({
    speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
    arrows: false,
		cssEase: 'linear',
    slidesToShow: 4,
  	slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
  	centerMode: true,
    focusOnSelect: true,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  // Reasons Slider
  $(".reasons-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
    slidesToShow: 1,
  	slidesToScroll: 1,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  });

  // Number Counter
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var animated = false;

  function runCounterAnimation() {
    if (!animated && isElementInViewport($('.counter-section')[0])) {
      $('.number span').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      animated = true;
    }
  }

  $(window).on('scroll', function() {
    runCounterAnimation();
  });

  runCounterAnimation();

  // FAQ Accordion
  $('.toggle').click(function() {
    let $this = $(this); 
    if ($this.next().hasClass('show')) {
      $this.removeClass('open');
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
      $this.toggleClass('open');
      $this.parent().parent().find('li .content').removeClass('show');
      $this.parent().parent().find('li .content').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
  });

  // Testimonials Slider
  $(".testimonials-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
    slidesToShow: 2,
  	slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});























