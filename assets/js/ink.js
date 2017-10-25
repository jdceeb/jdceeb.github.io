$(document).ready( function() {
  
  var $button_ink = $('.button-ink'),
      $ink, x, y, ink_diameter;
  
  $button_ink.on('click', function (e) {
    var $this = $(this);
    $this.removeClass('raised');
    
    // avoid adding multiple ink elements
    if (!$this.find('.ink').length) { // no ink element added yet
      $this.prepend('<span class="ink"></span>');
      $ink = $this.find('.ink');
    } else { // ink element added
      $ink = $this.find('.ink');
      $ink.removeClass('spill');
    }
    
    ink_diameter = Math.max($this.outerWidth(), $this.outerHeight());
    
    // x and y coordinates for ink element
    x = e.pageX - $this.offset().left - (ink_diameter/2);
    y = e.pageY - $this.offset().top - (ink_diameter/2);
    
    $ink.css({
      top      : y,
      left     : x,
      width    : ink_diameter,
      height   : ink_diameter
    }).addClass( 'spill' );
    
    $this.addClass('raised');
    
  });
  
});
