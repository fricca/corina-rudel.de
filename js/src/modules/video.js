const Video = (options) => {
    const defaults = {
        'selector': {
            'videos': '.figure__media--video',
            'playButton': '.figure__play'
        },
        'classes': {
            'hidden': 'is-hidden'
        }
    };

    const config = Object.assign({}, defaults, options);
    const videos = document.querySelectorAll(config.selector.videos);

    /**
     * Handle start/stop: Hide button on play
     *
     * @param String  type        One of "play" or "pause"
     * @param Node    playButton
     */
    const handlePlayPause = (type, playButton) => {
        playButton.classList.toggle(config.classes.hidden, type === 'play');
    }

    for (const videoWrap of videos) {
        const video = videoWrap.querySelector('video');
        const playButton = videoWrap.querySelector(config.selector.playButton);

        if (video && playButton) {
            playButton.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                }
            }, false);

            video.addEventListener('play', function(ev) {
                handlePlayPause(ev.type, playButton);
            }, false);
            video.addEventListener('pause', function(ev) {
                handlePlayPause(ev.type, playButton);
            }, false);
        }
    }
};

export default Video;