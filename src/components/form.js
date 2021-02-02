import React from 'react';
function Form(props) {
    return (
        <form onSubmit={props.fun_getWeather}>
            <input type="text" name="city" placeholder="Input Your City" />
            <input type="text" name="country" placeholder="Input Your Country" />
            <button className="btn_sub">submit</button>
        </form>
    )
}

export default Form;