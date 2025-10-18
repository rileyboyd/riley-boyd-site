/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
const options = {
    enableShortcuts: true,
    scrollToAnchorSpeed: 700,
    parallaxSpeed: 0.8,

    templates: {
        secondaryNavbarBackItem: 'Back',

        plainVideoIcon: '<span class="rb-video-icon"><span><span class="rb-play-icon"></span></span></span>',
        plainVideoLoadIcon: '<span class="rb-loading-spinner"><i></i></span>',
        fullscreenVideoClose: '<span class="rb-icon-close"></span>',
        
        instagram:
            `<div class="col-3">
                <a href="{{link}}" target="_blank">
                    <img src="{{image}}" alt="{{caption}}" class="rb-img-stretch">
                </a>
            </div>`,
        instagramLoadingText: 'Loading...',
        instagramFailText: 'Failed to fetch data',
        instagramApiPath: 'php/instagram/instagram.php',

        twitter:
            `<div class="rb-twitter">
                <span class="rb-twitter-icon fa fa-twitter"></span>
                <div class="rb-twitter-text">
                   {{tweet}}
                </div>
            </div>`,
        twitterLoadingText: 'Loading...',
        twitterFailText: 'Failed to fetch data',
        twitterApiPath: 'php/twitter/tweet.php',
    },

    shortcuts: {
        closeFullscreenVideo: 'esc',

        postScrollToComments: 'c',

        toggleSideLeftNavbar: 'alt+l',
        openSideLeftNavbar: '',
        closeSideLeftNavbar: 'esc',

        toggleSideRightNavbar: 'alt+r',
        openSideRightNavbar: '',
        closeSideRightNavbar: 'esc',

        toggleFullscreenNavbar: 'alt+f',
        openFullscreenNavbar: '',
        closeFullscreenNavbar: 'esc',
    },
};

export { options };
