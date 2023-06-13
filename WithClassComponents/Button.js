import {Component} from 'react';

class Button extends Component {
    render(){
        return (
            <button
                id = {this.props.value}
                className = {`col-5 btn mx-3 btn-outline-${this.props.buttonStyle}`}
                onClick = {this.props.chooseNumber}
            >{
                this.props.value}
            </button>
        )
    }

}
 
export default Button