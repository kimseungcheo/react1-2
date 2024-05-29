import { useCallback, useState } from "react";

export default function MeasureEx(props){
    const [height, setHeight] = useState(0)
    const measureExf = useCallback(node => {
        if(node != null){
            setHeight(node.getBoundingClientRect().height)
        }       
    }, [])
    return(
        <>
            <h1 ref={measureExf}>안녕, 리액트</h1>
            <h2>위 헤더의 높이는 {Math.round(height)}px입니다</h2>
        </>
    )
}
