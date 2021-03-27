import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Header Title

-------------------------------------------------------------------*/
function initHeaderTitle() {
    const self = this;
    const $navbarHeader = $('.rb-header');
    const isNavbarOpaque = $navbarHeader.hasClass('rb-header-opaque');
    const isNavbarTransparent = $('.rb-navbar-top').hasClass('rb-header-transparent');
    const $headerTitle = $('.rb-header-title > .rb-header-table');
    const $fullHeaderTitle = $('.rb-header-title-full > .rb-header-table');

    // remove header title padding if navbar opaque
    if (isNavbarOpaque) {
        $headerTitle.css('padding-top', 0);
    }

    self.debounceResize(() => {
        if ((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
            return;
        }

        const navH = $navbarHeader.outerHeight() || 0;

        // add header title padding
        if (!isNavbarTransparent && !isNavbarOpaque) {
            $headerTitle.css('padding-top', navH);
        }

        // fix header title height
        if ($fullHeaderTitle.length) {
            let headerH = '100vh';

            if (isNavbarOpaque) {
                headerH = `calc(100vh - ${navH}px)`;
            }

            $fullHeaderTitle.css('min-height', headerH);
        }
    }, true);
}

export { initHeaderTitle };
