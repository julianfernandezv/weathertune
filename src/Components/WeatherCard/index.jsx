const WeatherCard = (data) => {
  return (
    <>
    <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
      <div className="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform rounded-lg hover:scale-105 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-gray-900">
        <div className="text-md font-bold flex flex-col text-white">
          <span className="uppercase">Today</span>
          <span className="font-normal text-white text-sm">October 22</span>
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          {/* weather icon here */}
        </div>
        <p className="text-white mb-2">Partly cloud</p>
        <div className="text-3xl font-bold text-white mb-6">333º
          <span className="font-normal text-white mx-1">/</span>
          20º</div>
      </div>
    </div>
    <pre>{JSON.stringify(data, null, 2) }</pre>
    </>
  )
}

export default WeatherCard