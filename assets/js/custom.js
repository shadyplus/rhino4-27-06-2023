function check() {
  if ($(".chatForm .checkbox-custom").is(":checked")){
    $('.chatForm .button').prop("disabled", false);
    $('.chatForm .overlay').hide();
  }
  else {
      $('.chatForm .button').prop("disabled", true);
      $('.chatForm .overlay').show();
  }  
}

function check1() {
  if ($(".form1 .checkbox-custom").is(":checked")){
    $('.form1 .button').prop("disabled", false);
    $('.form1 .overlay').hide();
  }
  else {
      $('.form1 .button').prop("disabled", true);
      $('.form1 .overlay').show();
  }  
}
function check2() {
  if ($(".form2 .checkbox-custom").is(":checked")){
    $('.form2 .button').prop("disabled", false);
    $('.form2 .overlay').hide();
  }
  else {
      $('.form2 .button').prop("disabled", true);
      $('.form2 .overlay').show();
  }  
}

function check3() {
  if ($(".form3 .checkbox-custom").is(":checked")){
    $('.form3 .button').prop("disabled", false);
    $('.form3 .overlay').hide();
  }
  else {
      $('.form3 .button').prop("disabled", true);
      $('.form3 .overlay').show();
  }  
}


$(".overlay").hover(function(){
  $('.checkbox-custom-label').addClass('attension')
   },function(){
  $('.checkbox-custom-label').removeClass('attension')
});




jQuery(document).ready(function() {   

$(function() {
  $(".main_carousel").owlCarousel({    
        
    items: 1,
    dotsEach: true, 
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,  
    loop: true,
    responsive:{0:{dots: true, nav: false}, 640:{dots: false, nav: true}}
  });
 });


$(function() {
  var owl = $(".apt-slider");
  owl.owlCarousel({    
    nav: true,
    dots: false,
    items: 3,
    margin: 50,
    loop: true,
    responsiveBaseWidth: '.slide-wrap',
    responsive:{0:{items:1}, 420:{items:2}, 640:{items:3}, 840:{items:4}}
  });
});

});

    var pathname_url = window.location.pathname;
    var href_url = window.location.href;
 
    $('.submenu li a').each(function () {
        var link = $(this).attr('href');
        var pattern = new RegExp(link, "i");
        var exists = pattern.test(pathname_url);
        if(exists) {
            $('.submenu li a').removeClass("active");
            $(this).addClass("active");
        };
    });


    $('.menu-item a').each(function () {
        var menulink = $(this).attr('href');
        var menupattern = new RegExp(menulink, "i");
        var exists = menupattern.test(pathname_url);
        if(exists) {
            $('.menu-item a').removeClass("active");
            $(this).addClass("active");
        };
    });   

