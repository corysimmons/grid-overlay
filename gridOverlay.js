var gridOverlay = function() {
  $('.grid-overlay').remove();
  $('.go').each(function(k, v) {
    $('body').prepend('<div class="grid-overlay" style="width: '+ $(this).width() +'px; left: '+ $(this).position().left +'px" />');
  });
};

var didResize = false;
$(window).resize(function() {
  didResize = true;
});
setInterval(function() {
  if(didResize) {
    gridOverlay();
    didResize = false;
  }
}, 100);

gridOverlay();
