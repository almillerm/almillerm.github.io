$('.carusel-section').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,  
responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ],  
});
        
   $(document).ready(function() {
$('.more-btn').on('click', function(){
$('.modal').addClass('open_modal')});


if ($('span.icon-close').on('click', function(){
if ($('.modal').hasClass('open_modal')){
$('.modal').removeClass('open_modal'); }
}));
  });
        
        
   $(document).ready(function() {
$('.icon-menu').on('click', function(){
if ($('.icon-menu').hasClass('icon-menu3')){
$('.icon-menu').removeClass('icon-menu3');
$('.icon-menu3').css("display","none");  
}else{$('.icon-menu').addClass('icon-menu3');
$('.icon-menu3').css("display","block"); }


if ($('.active_menu').hasClass('open_menu')){
$('.active_menu').removeClass('open_menu');
}else{$('.active_menu').addClass('open_menu');}
});
       

$('.icon-menu3').on('click', function(){
if ($('span.icon-menu').hasClass('icon-menu3')){
    $('span.icon-menu').removeClass('icon-menu3');
 $('.icon-menu3').css("display","none");} 
}); 

$('.modal').scroll(function (event) {
    event.stopPropagation();
});
});





 
        