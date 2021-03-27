import { $, tween } from './_utility';

/*------------------------------------------------------------------

  Init Counters

-------------------------------------------------------------------*/
function initCounters() {
    const self = this;
    const $progressCount = $('.rb-progress.rb-count');
    const $numberCount = $('.rb-count:not(.rb-progress)');

    // set default progress
    $progressCount.each(function () {
        $(this).attr('data-rb-count', $(this).attr('data-progress'))
            .attr('data-rb-mask', $(this).attr('data-progress-mask'))
            .find('.rb-progress-line > div')
            .css('width', `${$(this).attr('data-rb-count-from') || '0'}%`)
            .find('.rb-progress-percent')
            .html('');
    });

    // set default numbers
    $numberCount.each(function () {
        $(this).attr('data-rb-count', $(this).attr('data-rb-count') || parseInt($(this).text(), 10))
            .html($(this).attr('data-rb-count-from') || '0');
    });

    let countersNum = 1;
    function runCounters() {
        if (!countersNum) {
            return;
        }

        const progress = $progressCount.filter('[data-rb-count]');
        const numbers = $numberCount.filter('[data-rb-count]');
        countersNum = progress.length + numbers.length;

        // progress
        $progressCount.filter('[data-rb-count]').each(function () {
            const $item = $(this);
            if (self.isInViewport($item)) {
                const count = {
                    curr: $item.attr('data-rb-count-from') || '0',
                    to: $item.attr('data-rb-count'),
                    mask: $item.attr('data-rb-mask') || '{$}%',
                };
                const $itemLine = $item.find('.rb-progress-line > div');
                const $itemLabel = $item.find('.rb-progress-percent');

                tween.to($itemLine, 1, {
                    width: `${count.to}%`,
                });
                tween.to(count, 1, {
                    curr: count.to,
                    roundProps: 'curr',
                    ease: Circ.easeIn,
                    onUpdate() {
                        $itemLabel.text(count.mask.replace('{$}', count.curr));
                    },
                });
                $item.removeAttr('data-rb-count');
            }
        });

        // number
        $numberCount.filter('[data-rb-count]').each(function () {
            const $item = $(this);
            if (self.isInViewport($item)) {
                const count = {
                    curr: $item.text(),
                    to: $item.attr('data-rb-count'),
                };
                $item.removeAttr('data-rb-count data-rb-count-from');
                tween.to(count, 1, {
                    curr: count.to,
                    roundProps: 'curr',
                    ease: Circ.easeIn,
                    onUpdate() {
                        $item.text(count.curr);
                    },
                });
            }
        });
    }

    self.throttleScroll(runCounters);
    runCounters();
}

export { initCounters };
