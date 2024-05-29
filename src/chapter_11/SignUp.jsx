import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState()
    const [gender, setGender] = useState('남자')
    const [document, setDocument] = useState()
    const [havebreakfest, setHaveBreakfest]= useState(true)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleChangeDocument = (e) => {
        setDocument(e.target.value)
    }
    const handleChangeHaveBreakfest = (e) => {
        setHaveBreakfest(e.target.checked)
    }
    const handleSubmit = (e) => {
        alert(`name: ${name}, gender: ${gender} 
        document: ${document} havebreakfest: ${havebreakfest}`,
    e.preventDefault())
    }
    return(
        <form onSubmit ={handleSubmit}>
            <label>
                name:
                <input type="text" value={name} onChange={handleChangeName} placeholder="이름을 입력해주세요"/>

            </label>
            <br></br>
            <label>
                gender:
                <select value={name} onChange={handleChangeGender} >
                <option value="남자">남자</option>
                <option value="여자">여자</option>
                </select>

            </label>
            <br>
            </br>
            <label>
                document:<br></br>
                <textarea value={document} onChange={handleChangeDocument} placeholder="문장을 입력해주세요."/>
            </label>
            <br>
            </br>
            <br>
            </br>
            <label>
                havebreakfest:
                <input type="checkbox"checked={havebreakfest} onChange={handleChangeHaveBreakfest} />
            </label>
            <br>
            </br>
            <button type="submit">전송</button>
        </form>
    )
}