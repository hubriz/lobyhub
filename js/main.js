// BROWSER variables

var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
var explorer = navigator.userAgent.indexOf('MSIE') > -1;
var firefox  = navigator.userAgent.indexOf('Firefox') > -1;
var safari   = navigator.userAgent.indexOf("Safari") > -1;
var camino   = navigator.userAgent.indexOf("Camino") > -1;
var opera    = navigator.userAgent.toLowerCase().indexOf("op") > -1;


// Prompt user not to use IE
$(window).on('load',function(){
  if(explorer) {
    $('#ie-warning').modal('show');
  }
});



(function($) {

  // Homepage Carousel
  $('#homepage-carousel').flexslider({
    animation: "slide",
    controlNav: true,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#homepage-slider',
    start: function(slider){
      var spinner = '<div class="text-center loader-spinner"><i class="fa fa-circle-o-notch fa-pulse fa-3x fa-fw"></i> ' +
                    '<span class="sr-only">Loading...</span></div>';
      $(spinner).prependTo('.loading');              
      $('.flexslider').removeClass('loading');
      $('.flexslider').find('.loader-spinner').remove();
    }
  });
 
  $('#homepage-slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#homepage-carousel",
    directionNav: false,
    useCSS: false
  }); 

  $('#search-header nav .list-wrapper > ul .dropdown-menu a').click(function(e){e.preventDefault();});

  // MegaMenu
  var windowWidth = $(window).width();
  var linkCategories = $('.link-categories');
  if( windowWidth > 1024) {
    $(window).on('load',function(){      

        linkCategories.on({
          'mouseover' : function(){
            $('.page-megamenu').css('zIndex', 3).addClass('show-megamenu');
          },
          'mouseleave' : function(){
            $('.page-megamenu').css('zIndex', -10).removeClass('show-megamenu');
          }
        });

        $('.page-megamenu').on({
          'mouseenter' : function(){
            $(this).css('zIndex', 3).addClass('show-megamenu');
          },
          'mouseleave' : function(){
             $(this).css('zIndex', -10).removeClass('show-megamenu');
          }
        });

        // Switch link menu as indicated on psd
        $('#header-navbar ul.navbar-nav > li').eq(1).appendTo('#header-navbar ul.navbar-nav');

        // Footer Copyright
        $('.row.footer-strip > div').eq(0).prependTo('.row.footer-strip').css('marginTop', 0);
    });
  } else {
      // Switch link menu as indicated on psd
      $('#header-navbar ul.navbar-nav > li').eq(1).prependTo('#header-navbar ul.navbar-nav');

      // Trigger megamenu on categories link
      $(document).on('click', '.link-categories', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.page-megamenu').css('zIndex', 3).toggleClass('show-megamenu');
      });

      $('.top-section, .navbar-header, .product-grid-section, .homepage-gallery-display, .product-tab-section, .sell-on-lobyhub-section, .newsletter-preview, #header-section').click(function(){
        $('.page-megamenu').css('zIndex', -10).removeClass('show-megamenu');
      });

      // Footer Copyright last
      $('.row.footer-strip > div').eq(0).appendTo('.row.footer-strip').css('marginTop', '20px');

  };






})(window.jQuery);
