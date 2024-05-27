document.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('circle-play-b');
    const videoIframe = document.getElementById('video');
    const playButtonWrapper = document.getElementById('play-button-wrapper');
    const likeIcon = document.getElementById('like-icon');
    const dislikeIcon = document.getElementById('dislike-icon');

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            playButtonWrapper.style.display = 'none';
        }
    }

    playButton.addEventListener('click', () => {
        player.playVideo();
        playButtonWrapper.style.display = 'none';
    });

    likeIcon.addEventListener('click', () => {
        likeIcon.classList.toggle('liked');
        dislikeIcon.classList.remove('disliked');
    });

    dislikeIcon.addEventListener('click', () => {
        dislikeIcon.classList.toggle('disliked');
        likeIcon.classList.remove('liked');
    });

    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
