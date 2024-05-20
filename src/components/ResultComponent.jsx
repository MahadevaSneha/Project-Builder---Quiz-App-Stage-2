import { Component } from "react";
import '../QuizComponent.css';
import PropTypes from 'prop-types';

class ResultComponent extends Component {
    handlePlayAgain = () => {
        this.props.onPlayAgain();
    }

    handleBackToHome = () => {
        this.props.onBackToHome();
    }

    render() {
        const { totalQuestions, attemptedQuestions, correctAnswers } = this.props;
        const wrongAnswers = attemptedQuestions - correctAnswers;
        const scorePercentage = totalQuestions ? (correctAnswers / totalQuestions) * 100 : 0;

        return (
            <div className="qst-pad">
                <h1>Result</h1>
                {scorePercentage >= 50 ? (
                    <h2>Congratulations! You passed the quiz.</h2>
                ) : (
                    <h2>You need more practice</h2>
                )}
                <h1>You score is {scorePercentage.toFixed(2)}%</h1>
                <h3>Total number of questions: {totalQuestions}</h3>
                <h3>Number of attempted questions: {attemptedQuestions}</h3>
                <h3>Number of correct answers: {correctAnswers}</h3>
                <h3>Number of wrong answers: {wrongAnswers}</h3>
                <button className="btn-1" onClick={this.handlePlayAgain}>Play Again</button>
                <button className="btn-2" onClick={this.handleBackToHome}>Back to home</button>
            </div>
        );
    }
}

ResultComponent.propTypes = {
    totalQuestions: PropTypes.number.isRequired,
    attemptedQuestions: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
    onBackToHome: PropTypes.func.isRequired
};

export default ResultComponent;
