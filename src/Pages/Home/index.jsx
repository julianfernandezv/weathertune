import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout'
import WeatherCard from '../../Components/WeatherCard';
import { apiUrl } from '../../api/'
import SpotifyCard from '../../Components/SpotifyCard';
import { useGeolocation } from "@uidotdev/usehooks";

function Home() {

    const [weather, setWeather] = useState(null);
    const [weatherData, setWeatherdata] = useState(null);

    const coordinates = useGeolocation();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}`)
                const data = await response.json()
                setWeather(data);
            } catch (error) {
                console.error(`Oh no, ocurrió un error: ${error}`);
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (weather && coordinates) {
            // Build the array with data from weather and coordinates
            const weatherArray = {longitude: coordinates.longitude, latitude: coordinates.latitude, weather: weather.current};
            setWeatherdata(weatherArray);
        }
    }, [weather, coordinates])


    return (
        <Layout>
            {/* <Location /> */}
            <SpotifyCard />
            {weatherData && <WeatherCard data={weatherData} />}
        </Layout>
    )
}

export default Home