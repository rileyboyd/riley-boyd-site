import { $ } from './_utility';

/* Jarallax */
function initPluginJarallax() {
    if (typeof $.fn.jarallax === 'undefined') {
        return;
    }
    const self = this;

    // header parallax
    const $parallaxHeader = $('.rb-header-title-parallax, .rb-header-title-parallax-opacity').eq(0);
    if ($parallaxHeader.length) {
        const $headerImage = $parallaxHeader.find('> .bg-image > div:eq(0)');
        const $headerContent = $parallaxHeader.find('> .bg-image ~ *');
        const headerParallaxScroll = $parallaxHeader.hasClass('rb-header-title-parallax');
        const headerParallaxOpacity = $parallaxHeader.hasClass('rb-header-title-parallax-opacity');
        $parallaxHeader.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll(calc) {
                let scrollImg = Math.min(100, 100 * (1 - calc.visiblePercent));
                let scrollInfo = Math.min(50, 50 * (1 - calc.visiblePercent));

                // fix if top banner not on top
                if (calc.beforeTop > 0) {
                    scrollImg = 0;
                    scrollInfo = 0;
                }

                if (headerParallaxScroll) {
                    $headerImage.css({
                        transform: `translateY(${scrollImg}px) translateZ(0)`,
                    });
                    $headerContent.css({
                        transform: `translateY(${scrollInfo}px) translateZ(0)`,
                    });
                }
                if (headerParallaxOpacity) {
                    $headerContent.css({
                        opacity: calc.visiblePercent < 0 || (calc.beforeTop > 0 ? 1 : calc.visiblePercent),
                    });
                }
            },
        });
    }

    // footer parallax
    const $parallaxFooter = $('.rb-footer-parallax, .rb-footer-parallax-opacity').eq(0);
    if ($parallaxFooter.length) {
        const $footerImage = $parallaxFooter.find('> .bg-image > div');
        const $footerContent = $parallaxFooter.find('> .bg-image ~ *');
        const footerParallaxScroll = $parallaxFooter.hasClass('rb-footer-parallax');
        const footerParallaxOpacity = $parallaxFooter.hasClass('rb-footer-parallax-opacity');
        $parallaxFooter.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll(calc) {
                const scrollImg = -Math.min(100, 100 * (1 - calc.visiblePercent));
                const scrollInfo = -Math.min(50, 50 * (1 - calc.visiblePercent));
                if (footerParallaxScroll) {
                    $footerImage.css({
                        transform: `translateY(${scrollImg}px) translateZ(0)`,
                    });
                    $footerContent.css({
                        transform: `translateY(${scrollInfo}px) translateZ(0)`,
                    });
                }
                if (footerParallaxOpacity) {
                    $footerContent.css({
                        opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent,
                    });
                }
            },
        });
    }

    // video backgrounds
    $('.bg-video[data-video]').each(function () {
        $(this).attr('data-jarallax-video', $(this).attr('data-video'));
        $(this).removeAttr('data-video');
    });

    // primary parallax
    $('.bg-image-parallax, .bg-video-parallax').jarallax({
        speed: self.options.parallaxSpeed,
    });

    // video without parallax
    $('.bg-video:not(.bg-video-parallax)').jarallax({
        speed: 1,
    });
}

export { initPluginJarallax };
