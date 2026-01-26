const WeatherOverview = ({ weather }) => {
  return (
    <div className="card">
      <h4>🌤 Current Weather</h4>
      🌡 Temperature: {weather.temp}°C <br />
      💧 Humidity: {weather.humidity}% <br />
      🌧 Rain: {weather.rain} mm <br />
      📝 Condition: {weather.description}
    </div>
  );
};

export default WeatherOverview;
