import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState()
    const [gender, setGender] = useState('남자')

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`name: ${name}, gender: ${gender}`)
        e.preventDefault()
    }
    return(
        <form onSubmit ={handleSubmit}>
            <label>
                name:
                <input type="text" value={name} onChange={handleChangeName} placeholder="이름을 입력해주세요"/>

            </label>
            <button type="submit">전송</button>
        </form>
    )
}