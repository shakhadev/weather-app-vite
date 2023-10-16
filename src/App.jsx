import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  useEffect(() => {
    const apiKey = "966baef59db2b65be340d4b67befa376";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response);
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.main.temp - 273.15}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <button onClick={() => setWeather("")}>Nazad</button>
          {/* <p>{lat} {lon}</p> */}
          {/* Add more data as needed */}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
            setCity(e.target.pogoda.value);
          }}
        >
          <label htmlFor="pogoda">Enter your city</label>
          <input type="text" id="pogoda" />
          <input type="submit" value="Search" />
        </form>
      )}
    </div>
  );
}

export default App;
