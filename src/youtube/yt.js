import React, { useEffect } from 'react';

function Youtube() {
   
    const apikey = process.env.REACT_APP_YOUTUBE_API_KEY;
     
    
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
        var videoId = 'zHcr32gRRCs';
        loadYouTubeVideo(apikey, videoId);
    }, [apikey]);

    return (
        <div id="player">
        </div>
    );
}

export default Youtube;