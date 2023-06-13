import React from 'react'
import Line from './Line'
import Result from './Result'

function App () {
    const [clicked, setClicked] = React.useState("Nothing")
    const chooseNumber = function(event){
        setClicked(event.target.id)
    }
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-12'>
                    <Line value1="1" value2="2" chooseNumber={chooseNumber}/>
                    <Line value1="2" value2="4" chooseNumber={chooseNumber}/>
                    <Line value1="3" value2="6" chooseNumber={chooseNumber}/>
                    <Line value1="4" value2="8" chooseNumber={chooseNumber}/>
                    <Line value1="5" value2="10" chooseNumber={chooseNumber}/>
                    <Line value1="6" value2="12" chooseNumber={chooseNumber}/>
                </div>
            </div>
            <div className='row'>
                <Result clicked={clicked} />
            </div>
        </div>
    )

}
export default App