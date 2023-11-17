import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout'
import WeatherCard from '../../Components/WeatherCard';
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
        </Layout>
    )
}

export default Home
