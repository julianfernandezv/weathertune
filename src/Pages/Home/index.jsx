import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout'
import WeatherCard from '../../Components/WeatherCard';
import SpotifyCard from '../../Components/SpotifyCard';
import { useGeolocation } from "@uidotdev/usehooks";

function Home() {

    const coordinates = useGeolocation();

    return (
        <Layout>
            <SpotifyCard />
            {coordinates && <WeatherCard coordinates={coordinates} />}
        </Layout>
    )
}

export default Home