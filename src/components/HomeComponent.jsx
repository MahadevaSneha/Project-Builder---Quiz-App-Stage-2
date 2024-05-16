import '../HomeComponent.css';
import React from 'react';
class HomeComponent extends React.Component{
    render(){
        return(
            <div className='App'>
                <h1>Quiz App</h1>
                <button className='btn-clr'>Play</button>
            </div>
        )
    }
}
export default HomeComponent;