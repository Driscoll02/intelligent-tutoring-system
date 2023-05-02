import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Similarity from "../../NeuralNet/similaritysentiment";
import { curriculumData } from "../../data/curriculum";
import NavBar from "../navbar";
import { Button } from "@mui/material";
import { stemmer } from 'stemmer';
import { useMediaQuery } from "@mui/material";

function Measurement() {
    const { id } = useParams();
    const yearID = Number(id.charAt(1));
    const [studentAnswer, setStudentAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState('');
    const [howStudentFeels, setHowStudentFeels] = useState('');
    const [feedback, setFeedback] = useState('');
    const [topicIndex, setTopicIndex] = useState(4);
    const [multipleChoiceOptions, setMultipleChoiceOptions] = useState();

    const wideScreenMatches = useMediaQuery('(min-width:1400px)');
    const standardScreenMatches = useMediaQuery('(min-width:1200px)');
    const smallStandardScreenMatches = useMediaQuery('(min-width:924px)');
    const tabletScreenMatches = useMediaQuery('(min-width:768px)');

    function chooseRandomQuestion() {
        if (yearID === 6) {
            setTopicIndex(3);
        }

        const randNum = Math.floor(Math.random() * curriculumData[yearID - 1][topicIndex].questions.length);
        setCurrentQuestionIndex(randNum);
        setCurrentQuestion(curriculumData[yearID - 1][topicIndex].questions[randNum].question);
        setMultipleChoiceOptions(curriculumData[yearID - 1][topicIndex].questions[randNum].multipleChoiceAnswers.join(" - "));
        console.log("Data:", curriculumData)
        setCurrentQuestionAnswer(curriculumData[yearID - 1][topicIndex].questions[randNum].answer);
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
            const randomPosFeedbackIndex = Math.floor(Math.random() * curriculumData[yearID - 1][topicIndex].questions[currentQuestionIndex].possibleFeedback.positiveFeedback.length)
            const positiveFeedback = curriculumData[yearID - 1][topicIndex].questions[currentQuestionIndex].possibleFeedback.positiveFeedback[randomPosFeedbackIndex];
            return setFeedback(positiveFeedback + " " + generateSentimentResponse(newResponse));
        }
        const negativeFeedback = curriculumData[yearID - 1][1].questions[currentQuestionIndex].possibleFeedback.negativeFeedback[0];
        return setFeedback(negativeFeedback + " " + generateSentimentResponse(newResponse));
    }

    function generateSentimentResponse(value) {
        const similarityObject = new Similarity();

        console.log("Value", value)

        const answerSemantics = similarityObject.analyseSemantics(value)
        console.log(answerSemantics);
        if(answerSemantics.score > 0 && (value.includes("heavy") && value.includes("weight"))) {
            return "I can see you are confident in your answer. It's good to see that you know heavy is a term used to describe weight. Good job!"
        } else if(answerSemantics.score > 0 && (value.includes("short") && value.includes("length"))) {
            return "I can see you are confident in your answer. It's good to see that you know short is a term used to describe length. Good job!"
        } else if(answerSemantics.score > 0 && (value.includes("long") && value.includes("length"))) {
            return "I can see you are confident in your answer. It's good to see that you know long is a term used to describe length. Good job!"
        } else if(answerSemantics.score > 0 && (value.includes("years") && value.includes("time"))) {
            return "I can see you are confident in your answer. It's good to see that you know years is a term used to describe time. Fun fact: One year is 365 days long. Good job!"
        } else if(answerSemantics.score > 0) {
            return "It's great to see you are confident with your answer. If you need any help, your teacher won't mind going through anything else with you."
        } else if(answerSemantics.score > 0 && (value.includes("heavy") && value.includes("length"))) {
            return "Heavy is not a word used to describe length. Keep trying! You'll get it in the end."
        } else if(answerSemantics.score > 0 && (value.includes("short") && value.includes("time"))) {
            return "Short is not a word used to describe time. Keep trying! You'll get it in the end."
        } else if(answerSemantics.score > 0 && (value.includes("half") && value.includes("weight"))) {
            return "Half is not a word used to describe weight. Keep trying! You'll get it in the end."
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

    function WideScreen() {
        return (
            <div style={styles.container}>
                <NavBar />
                <div style={styles.centerDiv}>
                    <div style={styles.topCenterDiv}>
                        <h2>Year {id.charAt(1)}</h2>
                        <h2>Measurement</h2>
                    </div>
                    <div style={styles.midCenterDiv}>
                        <div style={styles.leftMidCenterDiv}>
                            <h3>Question: {currentQuestion}</h3>
                            <h4 style={{marginTop: '0.8rem', fontSize: '1.1rem'}}>{multipleChoiceOptions}</h4>
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

    function SmallStandardScreen() {
        return (
            <div style={styles.container}>
                <NavBar />
                <div style={styles.centerDiv}>
                    <div style={styles.topCenterDiv}>
                        <h2>Year {id.charAt(1)}</h2>
                        <h2>Measurement</h2>
                    </div>
                    <div style={styles.midCenterDiv}>
                        <div style={styles.leftMidCenterDiv}>
                            <h3>Question: {currentQuestion}</h3>
                            <h4 style={{marginTop: '0.8rem', fontSize: '1.1rem'}}>{multipleChoiceOptions}</h4>
                            <textarea style={styles.questionTextArea} value={studentAnswer} onChange={(value) => setStudentAnswer(value.target.value)} />
                            <h3 style={styles.feedbackTitle}>Feedback:</h3>
                            <div style={styles.feedbackBox}>
                                <p>{feedback}</p>
                            </div>
                        </div>
                        <div style={styles.smallStandardRightMidCenterDiv}>
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

    function TabletScreen() {
        return (
            <div style={styles.container}>
                <NavBar />
                <div style={styles.centerDiv}>
                    <div style={styles.topCenterDiv}>
                        <h2>Year {id.charAt(1)}</h2>
                        <h2>Measurement</h2>
                    </div>
                    <div style={styles.midCenterDiv}>
                        <div style={styles.leftMidCenterDiv}>
                            <h3>Question: {currentQuestion}</h3>
                            <h4 style={{marginTop: '0.8rem', fontSize: '1.1rem'}}>{multipleChoiceOptions}</h4>
                            <textarea style={styles.questionTextArea} value={studentAnswer} onChange={(value) => setStudentAnswer(value.target.value)} />
                            <h3 style={styles.feedbackTitle}>Feedback:</h3>
                            <div style={styles.feedbackBox}>
                                <p>{feedback}</p>
                            </div>
                        </div>
                        <div style={styles.tabletRightMidCenterDiv}>
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

    function PhoneScreen() {
        return (
            <div style={styles.phoneContainer}>
                <NavBar />
                <div style={styles.phoneCenterDiv}>
                    <div style={styles.topCenterDiv}>
                        <h2>Year {id.charAt(1)}</h2>
                        <h2>Measurement</h2>
                    </div>
                    <div style={styles.phoneMidCenterDiv}>
                        <div style={styles.phoneleftMidCenterDiv}>
                            <h3>Question: {currentQuestion}</h3>
                            <h4 style={{marginTop: '0.8rem', fontSize: '1.1rem'}}>{multipleChoiceOptions}</h4>
                            <textarea style={styles.questionTextArea} value={studentAnswer} onChange={(value) => setStudentAnswer(value.target.value)} />
                            <h3 style={styles.feedbackTitle}>Feedback:</h3>
                            <div style={styles.feedbackBox}>
                                <p>{feedback}</p>
                            </div>
                        </div>
                        <div style={styles.phoneRightMidCenterDiv}>
                            <h3>How confident do you feel with your answer?</h3>
                            <textarea style={styles.feelingTextArea} value={howStudentFeels} onChange={(value) => setHowStudentFeels(value.target.value)} />
                        </div>
                    </div>
                    <div style={styles.phoneBottomCenterDiv}>
                        <Button variant="contained" style={styles.phoneSubmitAnswerButton} onClick={() => submitAnswer(studentAnswer)}>Submit Answer</Button>
                        <Button variant="contained" style={styles.nextQuestionButton} onClick={() => NextQuestion()}>Next Question</Button>
                    </div>
                </div>
            </div>
        );
    }

    if (wideScreenMatches) {
        return (
            <div>
                {WideScreen()}
            </div>
        )
    }

    if (standardScreenMatches) {
        return (
            <div>
                {WideScreen()}
            </div>
        )
    }

    if (smallStandardScreenMatches) {
        return (
            <div>
                {SmallStandardScreen()}
            </div>
        )
    }

    if (tabletScreenMatches) {
        return (
            <div>
                {TabletScreen()}
            </div>
        )
    }

    return (
        <div>
            {PhoneScreen()}
        </div>
    );
}

let styles = {
    container: {
        width: '100%',
        backgroundColor: '#232323',
    },
    phoneContainer: {
        width: '100vh',
        backgroundColor: '#232323',
    },
    centerDiv: {
        backgroundColor: '#30B330',
        marginTop: '10.24vh',
        height: '89.76vh',
        display: 'flex',
        flexDirection: 'column',
    },
    phoneCenterDiv: {
        backgroundColor: '#30B330',
        marginTop: '10.24vh',
        height: '89.76%',
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
    phoneMidCenterDiv: {
        display: 'flex',
        flexDirection: 'column',
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
    phoneleftMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '90vw',
        marginLeft: '2rem',
        marginBottom: '2rem',
        height: '50vh'
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
    smallStandardRightMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '35vw',
    },
    tabletRightMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '40vw',
    },
    phoneRightMidCenterDiv: {
        backgroundColor: '#5EFF5E',
        padding: '2em',
        borderRadius: 35,
        width: '90vw',
        marginLeft: '2rem',
        height: '40vh'
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
    phoneBottomCenterDiv: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '2rem',
        marginBottom: '2.2em',
    },
    submitAnswerButton: {
        backgroundColor: '#5EFF5E',
        color: 'black',
        fontWeight: 'bolder',
        padding: '1.6em'
    },
    phoneSubmitAnswerButton: {
        backgroundColor: '#5EFF5E',
        color: 'black',
        fontWeight: 'bolder',
        padding: '1.6em',
        width: '30vw'
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


export default Measurement;
