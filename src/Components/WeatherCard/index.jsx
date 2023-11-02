import { useState, useEffect } from 'react';

const WeatherCard = (coordinates) => {
  const [weather, setWeather] = useState(null);
  const [timeLabel, setTimeLabel] = useState(null);
  const [weatherString, setWeatherString] = useState(null);

  useEffect(() => {
    if (coordinates.coordinates.latitude && !weather) {
      fetchWeatherData(coordinates.coordinates);
    }
  }, [weather, coordinates])

  const fetchWeatherData = async (coordinates) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?longitude=${coordinates.longitude}&latitude=${coordinates.latitude}&current=temperature_2m,relativehumidity_2m,is_day,precipitation,rain,showers,snowfall,cloudcover,windspeed_10m&hourly=temperature_2m&timezone=auto`;
      const response = await fetch(`${url}`)
      const data = await response.json()
      setWeather(data);
      getTime(data);
    } catch (error) {
      console.error(`Oh no, ocurrió un error: ${error}`);
    }
  }

  const getTime = (data) => {
    const time = data.current.time;
    const date = new Date(time);
    const dateString = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeString = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    setTimeLabel({ date: dateString, time: timeString });
  }

  const getWeatherString = () => {
    if (!weatherString) {
      if (weather?.current.rain > 10) {
        setWeatherString("Rainy");
      }
      if (weather?.current.cloudcover > 70) {
        setWeatherString("Cloudy");
      }
      if (weather?.current.windspeed_10m) {
        setWeatherString("Windy");
      }
      if (weather?.current.temperature_2m < 15) {
        setWeatherString("Cold");
      } else if (weather?.current.temperature_2m > 25) {
        setWeatherString("Hot");
      }
    }
    return weatherString;
  }

  return (
    <>
      <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
        <div className="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform rounded-lg hover:scale-105 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-gray-900">
          <div className="text-md font-bold flex flex-col text-white">
            <span className="font-normal text-white text-3xl text-sm">{timeLabel?.date}</span>
            <span className="font-normal text-white text-3xl text-sm">{timeLabel?.time}</span>
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <div className="text-3xl font-bold text-white mb-6">{getWeatherString()}</div>
          </div>
          <div className="text-3xl font-bold text-white mb-6">{weather?.current.temperature_2m}º</div>
        </div>
      </div>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </>
  )
}

export default WeatherCard