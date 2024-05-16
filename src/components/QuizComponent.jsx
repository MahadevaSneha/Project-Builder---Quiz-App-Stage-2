import {Component } from "react";
import '../QuizComponent.css'
class QuizComponent extends Component{
    render(){
        return (
            <div className="qst-pad">
                <h1>Question</h1>
                <h2>Whcih is the only mammal that can jump?</h2>
                <ul>
                    <li>Dog</li>
                    <li>Elephant</li>
                    <li>Goat</li>
                    <li>Lion</li>
                </ul>
                <button className="btn-1">Previous</button>
                <button className="btn-2">Next</button>
                <button className="btn-3">Quit</button>
            </div>
        )
    }
}
export default QuizComponent;