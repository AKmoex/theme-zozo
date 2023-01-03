'use strict';

// back-to-top
$(document).ready((function (_this) {
  return function () {
    let bt
    bt = $('#back_to_top')
    if ($(document).width() > 480) {
      $(window).scroll(function () {
        let st
        st = $(window).scrollTop()
        if (st > 30) {
          return bt.css('display', 'block')
        } else {
          return bt.css('display', 'none')
        }
      })
      return bt.click(function () {
        $('body,html').animate({
          scrollTop: 0,
        }, 800)
        return false
      })
    }
  }
})(this))

// nav-toggle
$(document).ready((function (_this) {
  return function () {
    let nav,icon
    icon = $('#menu_icon')
    nav = $('#site_nav')
    icon.click(function () {
      nav.slideToggle(250)
    })
  }
})(this))

$(document).ready((function (_this) {
  return function () {
if ($(".post_content.markdown").length > 0 && $(".post_content.markdown").find("p").find("img").length > 0) {
  var $imgs = $(".post_content.markdown").find("p").find("img");
  $imgs.each(function () {
    if (!$(this).hasClass("gallery-img")) {
      $(this)
        .addClass("gallery-img")
        .wrap('<div class="fancybox"> <a data-fancybox="gallery"  href="' + $(this).attr("src") + '" class="fancybox"></a></div>');
    }
  });
}
  }
})(this))



// FancyBox
$('[data-fancybox="gallery"]').fancybox({
  arrows: false,
  infobar: false,
  buttons: [],
  clickContent: "close",
  autoFocus: false,
  backFocus: false,
  wheel: false,
  mobile: {
    clickContent: "close",
    clickSlide: "close",
    dblclickContent: false,
    dblclickSlide: false
  },
});

