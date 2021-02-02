import React from 'react';

function Weather(props) {

    return (
        <div>
            {
                props.country ? <p>country {props.country} </p> : ""
            }
            {
                props.city ? <p>city {props.city} </p> : ""
            }
            {
                props.humidity ? <p>humidity {props.humidity} </p> : ""
            }
            {
                props.description ? <p>description {props.description} </p> : ""
            }
            {
                props.error ? <p className="error">error {props.error} </p> : ""
            }

        </div >
    )

}

export default Weather;