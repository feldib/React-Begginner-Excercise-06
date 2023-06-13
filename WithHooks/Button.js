function Button (props) {
    return (
            <button
                id = {props.value}
                className = {`col-5 btn mx-3 btn-outline-${props.buttonStyle}`}
                onClick = {props.chooseNumber}
            >{
                props.value}
            </button>
    )
}
 
export default Button