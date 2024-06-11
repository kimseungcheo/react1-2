export default function Card() {
    const { title, backgroundColor, children} = props

    return (
        <div style={{backgroundColor: backgroundColor || 'white'}}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}