"use strict";

$(document).ready(function () {
  // 打開左側選單
  $('.mobile-link').click(function (event) {
    $('body').addClass('open');
  }); // 關閉左側選單

  $('.mobile-close').click(function (event) {
    $('body').removeClass('open');
  }); //orderSummary收合和動態加上disable值

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $('#multiCollapseExample1').collapse('show');
      $("#order").attr("disabled", "disabled");
    } else {
      $('#multiCollapseExample1').collapse('hide');
      $("#order").removeAttr("disabled");
    }
  });

  if (jQuery(window).width() > 768) {
    $("#order").attr("disabled", "disabled");
  } else {
    $("#order").removeAttr("disabled");
  } //swiper


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
//# sourceMappingURL=all.js.map
