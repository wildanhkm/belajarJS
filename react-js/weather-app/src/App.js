import React, { useState } from "react";
const apiBase = "https://api.openweathermap.org/data/2.5/";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${apiBase}weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDate()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "App Warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="Search-box">
          <input
            type="text"
            className="Search-bar"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="Location-box">
              <div className="Location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="Date">{dateBuilder(new Date())}</div>
            </div>
            <div className="Weather-box">
              <div className="Temp">{Math.round(weather.main.temp)}°c</div>
              <div className="Weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
