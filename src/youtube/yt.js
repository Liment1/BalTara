import React, { useEffect } from 'react';

function Youtube() {
    function loadYouTubeVideo(apiKey, videoId) {
        var url = `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                var videoUrl = data.items[0].player.embedHtml;
                videoUrl = videoUrl.replace('feature=oembed', 'autoplay=1&feature=oembed');
                document.getElementById('player').innerHTML = videoUrl;
            })
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        var apiKey = 'AIzaSyBXbCHbXIl31rw8oe3OvqZ-5ft0mH-n5s8';
        var videoId = 'zHcr32gRRCs';
        loadYouTubeVideo(apiKey, videoId);
    }, []);

    return (
        <div id="player">
        </div>
    );
}

export default Youtube;