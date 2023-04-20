import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Similarity from "../../NeuralNet/similarity";
// import TextGen from "../../NeuralNet/textgen";
import { curriculumData } from "../../data/curriculum";
import NavBar from "../navbar";
import { Button } from "@mui/material"
import NeuralNet from "../../NeuralNet/neuralnet";

function NumberPlaceValue() {
    const { id } = useParams();
    const [studentAnswer, setStudentAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState('');
    const [howStudentFeels, setHowStudentFeels] = useState('');
    const [feedback, setFeedback] = useState('');

    NeuralNet();

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
        // TextGen();
    }, []);

    function checkAnswer() {
        if (currentQuestionAnswer.includes(studentAnswer)) {
            const positiveFeedback = curriculumData[0][0][0].questions[currentQuestionIndex].possibleFeedback.positiveFeedback[0];
            return setFeedback(positiveFeedback);
        }
        const negativeFeedback = curriculumData[0][0][0].questions[currentQuestionIndex].possibleFeedback.negativeFeedback[0];
        return setFeedback(negativeFeedback);
    }

    function submitAnswer() {
        checkAnswer();

        if(studentAnswer !== '' && howStudentFeels !== '') {
            const similarityObject = new Similarity();
    
            const closestWord = similarityObject.getBestMatch(studentAnswer);
            console.log(closestWord);
            console.log("Semantic:", similarityObject.analyseSemantics(studentAnswer));
        } else {
            return setFeedback("You need to answer the question and how confident you are before submitting your answer.");
        }
    }

    return (
        <div style={styles.container}>
            <NavBar />
            <div style={styles.centerDiv}>
                <div style={styles.topCenterDiv}>
                    <h2>Year {id.charAt(1)}</h2>
                    <h2>Number and Place Value</h2>
                </div>
                <div style={styles.midCenterDiv}>
                    <div style={styles.leftMidCenterDiv}>
                        <h3>Question: {currentQuestion}</h3>
                        <textarea style={styles.questionTextArea} value={studentAnswer} onChange={(value) => setStudentAnswer(value.target.value)} />
                        <h3 style={styles.feedbackTitle}>Feedback:</h3>
                        <div style={styles.feedbackBox}>
                            <p>{feedback}</p>
                        </div>
                    </div>
                    <div style={styles.rightMidCenterDiv}>
                        <h3>How confident do you feel with your answer?</h3>
                        <textarea style={styles.feelingTextArea} value={howStudentFeels} onChange={(value) => setHowStudentFeels(value.target.value)} />
                    </div>
                </div>
                <div style={styles.bottomCenterDiv}>
                    <Button variant="contained" style={styles.submitAnswerButton} onClick={() => submitAnswer(studentAnswer)}>Submit Answer</Button>
                    <Button variant="contained" style={styles.nextQuestionButton} onClick={() => submitAnswer(studentAnswer)}>Next Question</Button>
                </div>
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
        flexDirection: 'column',
    },
    topCenterDiv: {
       margin: '2em',
       fontSize: '1.2rem',
       color: '#FFFFFF',
       flex: 1,
    },
    midCenterDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 4,
        marginBottom: '2.2em',
    },
    leftMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '40vw',
    },
    questionTextArea: {
        resize: 'none',
        width: '90%',
        height: '30%',
        marginTop: '1.2em',
        padding: '0.5em',
        fontSize: '1.1rem',
    },
    feedbackTitle: {
        marginTop: '0.6em',
    },
    feedbackBox: {
        marginTop: '0.8em',
        backgroundColor: 'white',
        width: '90%',
        height: '40%',
        padding: '0.5em',
    },
    rightMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '25vw',
    },
    feelingTextArea: {
        resize: 'none',
        width: '100%',
        height: '80%',
        marginTop: '1.2em',
        padding: '0.5em',
        fontSize: '1.1rem',
    },
    bottomCenterDiv: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitAnswerButton: {
        backgroundColor: '#5EFF5E',
        color: 'black',
        fontWeight: 'bolder',
        padding: '1.6em'
    },
    nextQuestionButton: {
        position: 'absolute',
        right: '5%',
        padding: '1.6em',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bolder'
    },
}

export default NumberPlaceValue;
