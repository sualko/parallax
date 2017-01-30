(function($) {
    $.fn.parallax = function(options) {
        options = $.extend({
            speed: 0.2,
            offset: null
        }, options || {});

        this.each(function() {
            var el = $(this);

            // Init bg position
            updateBgPosition(el);

            $(window).on('scroll', function() {
                var windowOffset = window.pageYOffset;

                updateBgPosition(el, windowOffset);
            });
        });

        function updateBgPosition(el, windowOffset) {
            windowOffset = windowOffset || 0;
            var offset = options.offset || el.outerHeight();

            var bgPosition = "50% " + ((windowOffset - offset) * options.speed) + "px";

            el.css('background-position', bgPosition);
        }

        return this;
    };
}(jQuery));
