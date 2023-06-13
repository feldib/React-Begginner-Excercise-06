import {Component} from 'react';
import Button from './Button'

class Line extends Component {
    render() { 
        return (
            <div className='row py-2 d-flex justify-content-around border-bottom'>
                <Button 
                    value={this.props.value1} 
                    chooseNumber = {this.props.chooseNumber} 
                    buttonStyle={"danger"}
                />
                <Button 
                    value={this.props.value2} 
                    chooseNumber = {this.props.chooseNumber} 
                    buttonStyle={"success"}
                />
            </div>
        )
    }
}
 
export default Line;