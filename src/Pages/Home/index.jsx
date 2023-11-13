import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout'
import WeatherCard from '../../Components/WeatherCard';
import SpotifyCard from '../../Components/SpotifyCard';
import { useGeolocation } from "@uidotdev/usehooks";

function Home() {
    const coordinates = useGeolocation();

    const [weatherString, setWeatherString] = useState('');

    const handleWeatherStringChange = (newWeatherString) => {
        setWeatherString(newWeatherString);
    }

    return (
        <Layout>
            {coordinates && 
            <WeatherCard 
                coordinates={coordinates} 
                onWeatherStringChange={handleWeatherStringChange}/>}
            {/* <SpotifyCard weatherString={weatherString}/> */}
        </Layout>
    )
}

export default Home
