var s = skrollr.init();

// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#],.tab)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        /*$('html,body').animate({
            scrollTop: $(target).offset().top
        }, 800, 'easeInOutCirc');
        return false;*/
      }
    }
  });
});

