import { useState, useEffect } from 'react';
import PlaylistWidget from '../PlaylistWidget';

const SpotifyCard = ({ weatherString }) => {
    const CLIENT_ID = "2a48389502964b2b979b6968080ace17"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const scope = 'user-read-private user-read-email';

    const [accessToken, setAccessToken] = useState(null);
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.hash.slice(1));
        const access_token = params.get('access_token');
        if (access_token) {
            setAccessToken(access_token);
        } else {
            window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scope}&response_type=token`;
        }
        if (weatherString) {
            searchPlaylists(weatherString + " day", access_token);
        }

    }, [weatherString]);

    async function searchPlaylists(query, accessToken) {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=playlist`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setPlaylist(data.playlists.items[0])
            return data.playlists.items[0];
        } catch (error) {
            console.error('Error searching for playlists:', error);
        }
    }

    return (
        <div>
            {accessToken && playlist ? (
                <div>
                    <iframe
                        title="Spotify"
                        className="SpotifyPlayer"
                        src={`https://embed.spotify.com/?uri=${playlist.uri}&view=list&theme=white`}
                        width="800"
                        height="600"
                        allowtransparency="true"
                    />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default SpotifyCard
