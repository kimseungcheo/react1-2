export default function TemperatureInput(props) {
    const scaleNames = {
        c: '섭씨',
        f: '화씨'
    }
    // const [temperature, setTemperature] = useState()
    const handleChange = (e) => {
        // setTemperature(e.target.value)
        props.onTemperatureChange(e.target.value)
    }

    return (
        <fieldset>
            <legend>온도를 입력해 주세요(단위: {scaleNames[props.scale]}) :</legend>
            {/* <input value={temperature} onChange={handleChange} /> */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}