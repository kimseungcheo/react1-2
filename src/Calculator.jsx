import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function Calculaotr() {
    const [temperature, setTemperature] = useState()
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale('c')
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature)
        setScale('f')
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    // const [temperature, setTemperature] = useState()
    // const handleChange = (e) => {
    //     setTemperature(e.target.value)
    // }

    return (
        <>
            <TemperatureInput scale='c'
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale='f'
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
        </>
        // <fieldset>
        //     <legend>섭씨온도를 입력해 주세요: </legend>
        //     <input value={temperature} onChange={handleChange} />
        //     <BoilingVerdict celsius = {parseFloat(temperature)} />
        // </fieldset>
    )
}
function BoilingVerdict(props){
    if(props.celsius >=100) {
        return <p>물이 끓습니다.</p>
    }
    else {
        return <p>물이 끓지 않습니다.</p>
    }

}

function toCelsius(fahrenheit) {
    return (
        ((fahrenheit - 32) * 5)/9
    )
}

function toFahrenheit(celsius) {
    return (
        ((celsius * 9) / 5) + 32
    )
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return('')
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) /1000
    return(rounded.toString())
}