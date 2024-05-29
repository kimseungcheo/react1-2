import { useEffect, useState } from "react"

export default function WithCounter(props) {
   // let count = 0
   const [count, setCount] = useState(0)

   useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`
   })


    const  [isOnline, setIsOnline ] = useState(null)
    useEffect(() => {
        ServerAPI.subcribeUserStatus(props,user,id, hand)
    }
    
)
}