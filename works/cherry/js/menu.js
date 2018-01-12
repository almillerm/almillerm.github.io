$(document).ready(function() {
$('.menu_btn').on('click', function(){
if ($('.active_menu').hasClass('open_menu')){
$('.active_menu').removeClass('open_menu');
}else{$('.active_menu').addClass('open_menu');}
});
});