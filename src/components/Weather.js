import React from 'react';

function Weather(props) {

    return (
        <div className="weather">
            {
                props.country ? <p className="country">country: {props.country} </p> : ""
            }
            {
                props.city ? <p className="city">city: {props.city} </p> : ""
            }
            {
                props.humidity ? <p className="humidity">humidity: {props.humidity} </p> : ""
            }
            {
                props.temp ? <p className="temp">temprature: {props.temp} </p> : ""
            }
            {
                props.description ? <p className="esc">description: {props.description} </p> : ""
            }
            {
                props.error ? <p className="error">error: {props.error} </p> : ""
            }

        </div >
    )

}

export default Weather;