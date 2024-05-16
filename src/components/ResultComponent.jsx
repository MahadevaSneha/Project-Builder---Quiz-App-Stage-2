import {Component } from "react";
import '../QuizComponent.css';
class ResultComponent extends Component{
    render(){
        return (
            <div className="qst-pad">
                <h1>Result</h1>
                <h2>You need more practice</h2>
                <h1>You score is 20%</h1>
                <h3>Total number od questions                      15</h3>
                <h3>Number of attempted questions                    </h3>
                <h3>Number of correct answers                        </h3>
                <h3>Number of wrong answers                          </h3>
                <button className="btn-1">Play Again</button>
                <button className="btn-2">Back to home </button>
            </div>
        )
    }
}
export default ResultComponent;