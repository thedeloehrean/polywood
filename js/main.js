// FAQ Functionality
$('.faq-question').click(function () {
  $(this).parent().toggleClass('active');
})

// Carousel Functionality
$(function () {
  var carSlide = $('.carousel-wrap ul');
  var carSlideChild = carSlide.find('li');
  var NumberOfClick = 0;
  var isClick = true;
  /*Adding 1px margin to Carousel Slide*/
  itemLength = carSlide.find('li:first').width() + 1;

  if ($(window).width() > 700) {
    carSlide.width(itemLength * carSlideChild.length);
    refreshPosition();
  }

  $('.btn-forward').click(function () {
    if (isClick) {
      isClick = false;
      NumberOfClick++;

      carSlide.stop(false, true).animate({
        left: '-=' + itemLength
      }, 300, function () {
        lastItem = carSlide.find('li:first');
        lastItem.remove().appendTo(carSlide);
        lastItem.css('left', ((carSlideChild.length - 1) * (itemLength)) + (NumberOfClick * itemLength));
        isClick = true;
      });
    }
  });

  $('.btn-back').click(function () {
    if (isClick) {
      isClick = false;
      NumberOfClick--;
      lastItem = carSlide.find('li:last');
      lastItem.remove().prependTo(carSlide);

      lastItem.css('left', itemLength * NumberOfClick);
      carSlide.finish(true).animate({
        left: '+=' + itemLength
      }, 300, function () {
        isClick = true;
      });
    }
  });

  function refreshPosition() {
    carSlideChild.each(function () {
      $(this).css('left', itemLength * carSlideChild.index($(this)));
    });
  }
});
