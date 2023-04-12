import React, { Component } from "react";
import { useParams, withRouter } from 'react-router-dom';
import Similarity from "../../NeuralNet/similarity";
import { curriculumData } from "../../data/curriculum";
import NavBar from "../navbar";

function NumberPlaceValue(props) {
    const { id } = useParams();
    let studentAnswer = '';

    console.log(id)
    console.log(studentAnswer)

    return (
        <div style={styles.container}>
            <NavBar />
            <div style={styles.centerDiv}>
                <h1>Number and Place Value</h1>
                <h3>Question: </h3>
                <input type="text" value={studentAnswer} onChange={(value) => studentAnswer = value.target.value} />
                <button onClick={() => submitAnswer()}>Submit answer</button>
            </div>
        </div>
    );
}

function submitAnswer() {
    const { studentAnswer } = this.state
    const similarityObject = new Similarity();

    const closestWord = similarityObject.getBestMatch(studentAnswer);
    console.log(closestWord);
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
