(function($) {
  $(function() {
    $('.button-collapse').sideNav();
    $('.modal').modal();
  });
})(jQuery);

$('.scrollAnchor').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});