import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Similarity from "../../NeuralNet/similaritysentiment";
import { curriculumData } from "../../data/curriculum";
import NavBar from "../navbar";
import { Button } from "@mui/material";
import { stemmer } from 'stemmer';

function Algebra() {
    const { id } = useParams();
    const yearID = Number(id.charAt(1));
    const [studentAnswer, setStudentAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState('');
    const [howStudentFeels, setHowStudentFeels] = useState('');
    const [feedback, setFeedback] = useState('');

    function chooseRandomQuestion() {
        console.log("Data:", curriculumData[5][5])
        const randNum = Math.floor(Math.random() * curriculumData[yearID - 1][5].questions.length);
        setCurrentQuestionIndex(randNum);
        setCurrentQuestion(curriculumData[yearID - 1][5].questions[randNum].question);
        setCurrentQuestionAnswer(curriculumData[yearID - 1][5].questions[randNum].answer);
    }

    useEffect(() => {
        chooseRandomQuestion();
    }, []);

    function processStudentResponse(studentSentimentAnswer) {
        // Natural language processing to aid semantic analysis
        console.log(studentSentimentAnswer)
        const tokenised_words = studentSentimentAnswer.split(" ");
        const lowercaseWords = tokenised_words.map((word) => word.toLowerCase());
        const stemmedWords = lowercaseWords.map((word) => stemmer(word));
        const joinedString = stemmedWords.join(" ");
        
        // Remove any irrelevent characters
        let processedString = [];
        for (let i = 0; i < joinedString.length; i++) {
            if(joinedString[i] !== '!' && joinedString[i] !== '?' && joinedString[i] !== '"') {
                processedString.push(joinedString[i]);
            }
        }

        processedString = processedString.join('')

        return processedString;
    }

    function checkAnswer() {
        const newResponse = processStudentResponse(howStudentFeels);

        if (currentQuestionAnswer.includes(studentAnswer)) {
            const randomPosFeedbackIndex = Math.floor(Math.random() * curriculumData[yearID - 1][5].questions[currentQuestionIndex].possibleFeedback.positiveFeedback.length)
            const positiveFeedback = curriculumData[yearID - 1][5].questions[currentQuestionIndex].possibleFeedback.positiveFeedback[randomPosFeedbackIndex];
            return setFeedback(positiveFeedback + " " + generateSentimentResponse(newResponse));
        }
        const negativeFeedback = curriculumData[yearID - 1][1].questions[currentQuestionIndex].possibleFeedback.negativeFeedback[0];
        return setFeedback(negativeFeedback + " " + generateSentimentResponse(newResponse));
    }

    function generateSentimentResponse(value) {
        const similarityObject = new Similarity();

        const answerSemantics = similarityObject.analyseSemantics(value)

        // Rule based system
        if (answerSemantics.score > 0 && value.includes("equation")) {
            return "I can see you are very confident in your answer. I like your use of the term 'equation'. It shows you have a good understanding of the terminology. Good job!"
        } else if(answerSemantics.score > 0 && value.includes("formulae")) {
            return "I can see you are very confident in your answer. I like your use of the term 'formulae'. It shows you have a good understanding of the terminology. Good job!"
        } else if(answerSemantics.score > 0) {
            return "It's great to see you are confident with your answer. If you need any help, your teacher won't mind going through anything else with you."
        } else if(answerSemantics.score < 0 && value.includes("algebra")) {
            return "Algebra is hard. You definitely shouldn't worry if you don't get it. Algebra is the most difficult topic you will study in primary school."
        } else {
            return "I can see you are not very confident with your answer. Don't worry, you can practice as much as you want!"
        }
    }

    function submitAnswer() {
        checkAnswer();

        if(studentAnswer !== '' && howStudentFeels !== '') {
            const similarityObject = new Similarity();
    
            const closestWord = similarityObject.getBestMatch(studentAnswer);
            console.log(closestWord);
            console.log("Semantic:", similarityObject.analyseSemantics(howStudentFeels));
        } else {
            return setFeedback("Both fields must be completed before submitting your answer.");
        }
    }

    function NextQuestion() {
        chooseRandomQuestion();

        setFeedback('');
        setStudentAnswer('');
        setHowStudentFeels('');
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
                    <Button variant="contained" style={styles.nextQuestionButton} onClick={() => NextQuestion()}>Next Question</Button>
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

export default Algebra;
