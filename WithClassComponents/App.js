import React from 'react'
import Line from './Line'

class App extends React.Component {
    constructor(){
        super()
        this.state={
            clicked: "Nothing"
        }
        this.chooseNumber = this.chooseNumber.bind(this)
    }
    chooseNumber(event){
        this.setState({
            clicked: event.target.id
        })
    }
    render() { 
        return (
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-12'>
                        <Line value1="1" value2="2" chooseNumber={this.chooseNumber}/>
                        <Line value1="2" value2="4" chooseNumber={this.chooseNumber}/>
                        <Line value1="3" value2="6" chooseNumber={this.chooseNumber}/>
                        <Line value1="4" value2="8" chooseNumber={this.chooseNumber}/>
                        <Line value1="5" value2="10" chooseNumber={this.chooseNumber}/>
                        <Line value1="6" value2="12" chooseNumber={this.chooseNumber}/>
                    </div>
                </div>
                <div className='row'>
                    <div className=
                    "col-12 bg-info bg-opacity-25 text-secondary py-3"
                    >
                        You've clicked {this.state.clicked}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default App