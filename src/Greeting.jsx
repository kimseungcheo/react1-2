export default function Greeting(props) {
    if(props.onClick) {
        return <p>안녕하세요. 반갑습ㄴ디ㅏ.</p>
    } else {
        return <p>로그인하세요</p>
    }
}