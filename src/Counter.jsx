import { useEffect, useState } from "react"

export default function Counter(props) {
   // let count = 0
   const [count, setCount] = useState(0)

   useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`
   })


    return(
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>클릭</button>
            
        </>
    )
}