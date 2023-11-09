import React, { useState, useEffect } from 'react';

const PlaylistWidget = ({ accessToken, playlist }) => {
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (!accessToken || !playlist) {
            return;
        }

        window.onSpotifyWebPlaybackSDKReady = () => {
            // ... (player setup and event handling code)
        };

        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [accessToken, playlist]);

    useEffect(() => {
        if (playlist) {
            setAudio(new Audio(playlist.external_urls.spotify));
        }
    }, [playlist]);

    const handlePlay = () => {
        if (audio) {
            audio.play();
        }
    }

    return (
        <div>
            <h2>{playlist?.name}</h2>
            <p>{playlist?.description}</p>
            <button onClick={handlePlay}>Play</button>
        </div>
    );
}

export default PlaylistWidget;
