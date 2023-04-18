import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Similarity from "../../NeuralNet/similarity";
import { curriculumData } from "../../data/curriculum";
import NavBar from "../navbar";
import { Button } from "@mui/material"

function NumberPlaceValue(props) {
    const { id } = useParams();
    const [studentAnswer, setStudentAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState(null);
    const [howStudentFeels, setHowStudentFeels] = useState(null);
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
                <div style={styles.topCenterDiv}>
                    <h2>Year {id.charAt(1)}</h2>
                    <h2>Number and Place Value</h2>
                </div>
                <div style={styles.midCenterDiv}>
                    <div style={styles.leftMidCenterDiv}>
                        <h3>Question: {currentQuestion}</h3>
                        <textarea style={styles.questionTextArea} value={studentAnswer} onChange={(value) => setStudentAnswer(value.target.value)} />
                        <p>{feedback}</p>
                    </div>
                    <div style={styles.rightMidCenterDiv}>
                        <h3>How confident do you feel with your answer?</h3>
                        <textarea style={styles.questionTextArea} value={howStudentFeels} onChange={(value) => setHowStudentFeels(value.target.value)} />
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
        height: '80%',
        marginTop: '01.2em',
    },
    rightMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '25vw',
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
