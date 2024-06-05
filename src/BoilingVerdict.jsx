import React from "react";
export default function BoilingVerdict(props){
    if(props.celsius >=100) {
        return <p>물이 끓습니다.</p>
    }
    else if(props.foo <= 0){
        return <p>물이 끓지 않습니다.</p>
    }

}