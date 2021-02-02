import Weather from "./components/Weather";
import Form from "./components/Form";
import './App.css';
import React from "react";

const api_key = "bd143cad3776322f6654925a09264955";
class App extends React.Component {

  state = {
    country: "",
    city: "",
    humidity: "",
    main: "",
    description: "",
    error: ""
  }

  // Get Weather Function
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`)
    const data = await api.json();

    // check if there a city and country
    if (city && country) {
      this.setState({
        country: data.sys.country,
        city: data.name,
        humidity: data.main.humidity,
        main: data.weather[0].main,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        country: '',
        city: '',
        humidity: '',
        main: '',
        description: '',
        error: "Please Input Your Data"
      });
    }

  }

  render() {
    return (
      <div className="App" >
        <h2 className="title_weather">show some info about weather</h2>
        <Form fun_getWeather={this.getWeather} />
        <Weather
          country={this.state.country}
          city={this.state.city}
          humidity={this.state.humidity}
          main={this.state.main}
          description={this.state.description}
          error={this.state.error} />

      </div >
    );
  }
}

export default App;
