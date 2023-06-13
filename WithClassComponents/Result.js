import {Component} from 'react'

class Result extends Component{
    render(){
        return (
            <div className=
                "col-12 bg-info bg-opacity-25 text-secondary py-3"
            >
                You've clicked {this.props.clicked}
            </div>
        )
    }

}
 
export default Result;