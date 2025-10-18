import {
    $, $body, tween, debounceResize,
} from './_utility';

/* Isotope */
function initPluginIsotope() {
    if (typeof window.Isotope === 'undefined') {
        return;
    }
    const self = this;

    $('.rb-isotope').each(function () {
        const $this = $(this);
        const $grid = $this.isotope({
            itemSelector: '.rb-isotope-item',
        });
        $grid.imagesLoaded().progress(() => {
            $grid.isotope('layout');
        });
        $grid.on('arrangeComplete', () => {
            self.debounceResize();
        });

        // filter
        let $filter = [];
        if ($this.parent().hasClass('rb-portfolio-list')) {
            $filter = $this.parent().prev('.rb-isotope-filter');
        } else {
            $filter = $this.prev('.rb-isotope-filter');
        }
        if ($filter.length) {
            $filter.on('click', '[data-filter]', function (e) {
                e.preventDefault();
                const filter = $(this).attr('data-filter');

                $(this).addClass('active').siblings().removeClass('active');

                $grid.isotope({
                    filter: filter === '*' ? '' : `[data-filter*=${filter}]`,
                });
            });
        }
    });

    // filter toggler
    $body.on('click', '[href="#rb-toggle-filter"]:not(.busy)', function (e) {
        const $pagination = $(this).parent('.rb-pagination');
        const $filter = $pagination.next('.rb-isotope-filter');
        const isActive = $filter.hasClass('rb-isotope-filter-active');

        if (!$pagination.length || !$filter.length) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        $pagination.addClass('busy');

        if (isActive) {
            tween.staggerTo($filter.children(), 0.2, {
                y: -10,
                opacity: 0,
            }, 0.04, () => {
                tween.to($filter, 0.4, {
                    height: 0,
                    marginBottom: 0,
                    marginTop: 0,
                    force3D: true,
                    display: 'none',
                    onComplete() {
                        $pagination.removeClass('rb-isotope-filter-active');
                        $filter.removeClass('rb-isotope-filter-active');
                        $pagination.removeClass('busy');
                        debounceResize();
                    },
                });
            });
        } else {
            $filter.css('height', 'auto');
            const filterHeight = $filter.height();
            $filter.css('height', 0);
            tween.set($filter.children(), {
                y: -10,
                opacity: 0,
            });
            tween.to($filter, 0.4, {
                height: filterHeight,
                marginBottom: 30,
                marginTop: -23,
                force3D: true,
                display: 'block',
                onComplete() {
                    tween.staggerTo($filter.children(), 0.2, {
                        y: 0,
                        opacity: 1,
                    }, 0.04, () => {
                        $pagination.addClass('rb-isotope-filter-active');
                        $filter.addClass('rb-isotope-filter-active');
                        $pagination.removeClass('busy');
                        debounceResize();
                    });
                },
            });
        }
    });
}

export { initPluginIsotope };
