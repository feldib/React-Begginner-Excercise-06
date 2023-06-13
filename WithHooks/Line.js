import Button from './Button'

function Line (props) {
    return (
        <div className='row py-2 d-flex justify-content-around border-bottom'>
            <Button 
                value={props.value1} 
                chooseNumber = {props.chooseNumber} 
                buttonStyle={"danger"}
            />
            <Button 
                value={props.value2} 
                chooseNumber = {props.chooseNumber} 
                buttonStyle={"success"}
            />
        </div>
    )
}
 
export default Line