import {
    $, tween, $wnd, $doc,
} from './_utility';

/*------------------------------------------------------------------

  Init Navbar Fullscreen

-------------------------------------------------------------------*/
function initNavbarFullscreen() {
    const self = this;
    const $navbar = $('.rb-navbar-full');
    const $navbarSocial = $navbar.find('.rb-nav-social');
    let isOpened;

    self.fullscreenNavbarIsOpened = () => isOpened;

    self.toggleFullscreenNavbar = () => {
        self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
    };
    self.openFullscreenNavbar = () => {
        if (isOpened || !$navbar.length) {
            return;
        }
        isOpened = 1;

        let $navbarMenuItems = $navbar.find('.rb-nav .rb-drop-item.open > .dropdown:not(.closed) > li > a');
        if (!$navbarMenuItems.length) {
            $navbarMenuItems = $navbar.find('.rb-nav > li > a');
        }

        // active all togglers
        $('.rb-navbar-full-toggle').addClass('active');

        // set top position and animate
        tween.set($navbarMenuItems, {
            opacity: 0,
            force3D: true,
        });
        tween.set($navbarSocial, {
            opacity: 0,
            force3D: true,
        });
        tween.to($navbar, 0.5, {
            opacity: 1,
            force3D: true,
            display: 'block',
            onComplete() {
                self.initPluginNano($navbar);
            },
        });
        tween.staggerTo($navbarMenuItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2,
        }, 0.05);
        tween.to($navbarSocial, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4,
        });

        $navbar.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('rb-open-full-navbar', [$navbar]);
    };

    self.closeFullscreenNavbar = (dontTouchBody) => {
        if (!isOpened || !$navbar.length) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.rb-navbar-full-toggle').removeClass('active');

        // set top position and animate
        tween.to($navbar, 0.5, {
            opacity: 0,
            force3D: true,
            display: 'none',
            onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            },
        });

        // open navbar block
        $navbar.removeClass('open');

        // trigger event
        $wnd.trigger('rb-close-full-navbar', [$navbar]);
    };

    $doc.on('click', '.rb-navbar-full-toggle', (e) => {
        self.toggleFullscreenNavbar();
        e.preventDefault();
    });

    $wnd.on('rb-open-search-block', () => {
        self.closeFullscreenNavbar(1);
    });
    $wnd.on('rb-open-share-place', self.closeFullscreenNavbar);
}

export { initNavbarFullscreen };
