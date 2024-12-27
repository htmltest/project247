$(document).ready(function() {

    $('body').on('click', '.video-link', function(e) {
        var curLink = $(this);

        var curWidth = $(window).width();

        var curScroll = $(window).scrollTop();
        $('html').addClass('window-video-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        $('html').data('scrollTop', curScroll);

        var windowHTML =    '<div class="window-video">';

        windowHTML +=           '<a href="#" class="window-video-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-photo-close"></use></svg></a>';

        var videoLink = curLink.attr('href');
        if (videoLink.indexOf('?') != -1) {
            videoLink += '&amp;rel=0&amp;autoplay=1';
        } else {
            videoLink += '?rel=0&amp;autoplay=1';
        }

        windowHTML +=           '<div class="window-video-player"><iframe width="560" height="315" src="' + videoLink + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

        windowHTML +=       '</div>';

        $('.window-video').remove();
        $('body').append(windowHTML);

        e.preventDefault();
    });

    $('body').on('click', '.window-video-close', function(e) {
        $('.window-video').remove();
        $('html').removeClass('window-video-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $(window).scrollTop($('html').data('scrollTop'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('.window-video').length > 0) {
                $('.window-video-close').trigger('click');
            }
        }
    });

});