import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Similarity from "../../NeuralNet/similarity";
import { curriculumData } from "../../data/curriculum";
import NavBar from "../navbar";

function NumberPlaceValue(props) {
    const { id } = useParams();
    const [studentAnswer, setStudentAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState(null);
    const [feedback, setFeedback] = useState(null);

    // console.log(id)
    // console.log(studentAnswer)

    function chooseRandomQuestion() {
        const randNum = Math.floor(Math.random() * curriculumData[0][0][0].questions.length);
        setCurrentQuestionIndex(randNum);
        setCurrentQuestion(curriculumData[0][0][0].questions[randNum].question);
        setCurrentQuestionAnswer(curriculumData[0][0][0].questions[randNum].answer);
    }

    useEffect(() => {
        chooseRandomQuestion();
    }, []);

    function checkAnswer() {
        if (currentQuestionAnswer.includes(studentAnswer)) {
            const positiveFeedback = curriculumData[0][0][0].questions[currentQuestionIndex].possibleFeedback.positiveFeedback[0];
            return setFeedback(positiveFeedback)
        }
        const negativeFeedback = curriculumData[0][0][0].questions[currentQuestionIndex].possibleFeedback.negativeFeedback[0];
        return setFeedback(negativeFeedback)
    }

    function submitAnswer() {
        checkAnswer();

        const similarityObject = new Similarity();
    
        const closestWord = similarityObject.getBestMatch(studentAnswer);
        console.log(closestWord);
        console.log("Semantic:", similarityObject.analyseSemantics(studentAnswer));
    }

    return (
        <div style={styles.container}>
            <NavBar />
            <div style={styles.centerDiv}>
                <h1>Number and Place Value</h1>
                <h3>Question: {currentQuestion}</h3>
                <input type="text" value={studentAnswer} onChange={(value) => setStudentAnswer(value.target.value)} />
                <button onClick={() => submitAnswer(studentAnswer)}>Submit answer</button>
                <p>{feedback}</p>
            </div>
        </div>
    );
}

let styles = {
    container: {
        width: '100%',
        backgroundColor: '#232323',
    },
    centerDiv: {
        backgroundColor: '#30B330',
        marginTop: '10.24vh',
        height: '89.76vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
}

export default NumberPlaceValue;
