export default function SplitPane(props) {
    return(
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}