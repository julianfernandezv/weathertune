import { useState, useEffect } from 'react';
// UI constants
const SEARCH_DISPLAY_TEXT = "Displaying results for: ";

const SpotifyCard = (clientid, clientsecret) => { //placeholders for now
    const CLIENT_ID = "2a48389502964b2b979b6968080ace17"
    const REDIRECT_URI = "http://localhost:5173/"
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
            searchPlaylists('rainy', access_token);
        } else {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}&response_type=token`;
        }
    }, []);

    async function searchPlaylists(query, accessToken) {https://api.spotify.com/v1/search?q=rainy&type=playlist'
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
            {accessToken ? (
                <div>Logged in with access token: {accessToken}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default SpotifyCard