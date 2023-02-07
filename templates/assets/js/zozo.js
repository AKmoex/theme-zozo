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
        let nav, icon
        icon = $('#menu_icon')
        nav = $('#site_nav')
        icon.click(function () {
            nav.slideToggle(250)
        })
    }
})(this))

// Fancybox Wrapper
$(document).ready((function (_this) {
    return function () {
        if ($(".post_content.markdown").length > 0 && $(".post_content.markdown").find("p").find("img").length > 0) {
            var $imgs = $(".post_content.markdown").find("p").find("img");
            $imgs.each(function () {
                if (!$(this).hasClass("gallery-img")) {
                    $(this)
                        .wrap('<div class="fancybox"> <a data-fancybox="gallery"  href="' + $(this).attr("src") + '"></a></div>');
                }
            });
        }
    }
})(this))

// Fancybox
$(document).ready((function (_this) {
    return function () {
        if (typeof Fancybox === 'function') {
            Fancybox.bind('[data-fancybox="gallery"]', {
                hideScrollbar: false,
            });
        }
    }
})(this))

// Toc
$(document).ready((function (_this) {
    return function () {
        if ($(".post_content.markdown").find('.toc').length < 1) {
            return
        }
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".post_content.markdown",
            headingSelector: "h1,h2,h3",
            scrollSmooth: true,
            orderedList: false,

        });
    }
})(this))



