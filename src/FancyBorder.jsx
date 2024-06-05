export default function FancyBorder(props) {
return(
    <div className={'FancyBorder'+ props.color}>
        {props.children}
    </div>
)//다음과 같이 props.children을 사용하게 되면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됩니다.
}