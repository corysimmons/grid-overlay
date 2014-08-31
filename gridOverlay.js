var gridOverlay = function() {
  $('[grid-overlay]').remove();
  $('[go]').each(function(k, v) {
    $('body').prepend('<div grid-overlay style="width: '+ $(this).width() +'px; left: '+ $(this).position().left +'px" />');
  });
  $('[go-parent]').children().each(function(k, v) {
    $('body').prepend('<div grid-overlay style="width: '+ $(this).width() +'px; left: '+ $(this).position().left +'px" />');
  });
  $('[grid-overlay]').css({
    background: 'blue',
    position: 'absolute',
    top: 0,
    bottom: 0,
    opacity: .15,
    zIndex: 9999
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
