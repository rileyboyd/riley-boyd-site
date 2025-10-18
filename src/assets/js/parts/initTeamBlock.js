import { $, $body } from './_utility';

/*------------------------------------------------------------------

 Team Block

 -------------------------------------------------------------------*/
function initTeamBlock() {
    function activateMemberBlock($item) {
        const id = $item.attr('data-item-id');

        // add active class to item
        $item.siblings().removeClass('active');
        $item.addClass('active');

        // add class to item background
        $item.siblings('.rb-team-block-backgrounds:eq(0)').find(`[data-bg-id="${id}"]`).addClass('active').siblings()
            .removeClass('active');
    }

    // prepare team blocks
    $('.rb-team-block').each(function () {
        const $this = $(this);

        // prepare backgrounds
        const $backgrounds = $('<div class="rb-team-block-backgrounds">');
        $this.find('.rb-team-member img.rb-team-member-photo').each(function () {
            const $img = $(this);
            const $parent = $img.parent();
            const id = $parent.index();

            $parent.attr('data-item-id', id);
            $('<div>').css({
                'background-image': `url("${$img.attr('src')}")`,
            })
                .attr('data-bg-id', id)
                .appendTo($backgrounds);
        });
        $this.append($backgrounds);

        // activate item
        let $activeMember = $this.children('.rb-team-member.active:eq(0)');
        if (!$activeMember.length) {
            $activeMember = $this.children('.rb-team-member:eq(0)');
        }
        activateMemberBlock($activeMember);
    });

    // hover activation
    $body.on('click', '.rb-team-block .rb-team-member', function () {
        activateMemberBlock($(this));
    });
}

export { initTeamBlock };
