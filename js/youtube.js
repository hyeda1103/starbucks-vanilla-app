// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 유튜브 제어하는 JS 라이브러리가 제공하는 함수이므로 이름을 바꾸면 절대 안됨
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        // 유튜브 영상의 주소에서 v=뒤쪽 부분을 긁어 videoID로 설정
        videoId: 'An6LvWQuj_8',
        // 제어할 수 있는 속성
        playerVars: {
            autoplay: true, // 자동 재생
            loop: true, // 반복 재생
            playlist: 'An6LvWQuj_8', // 반복 재생할 영상의 ID 목록
        },
        events: {
            // 동영상이 준비되면 다음 함수 실행
            onReady: function(event) {
                // 이벤트 대상 음소거 처리
                event.target.mute()
            }
        }
    });
}