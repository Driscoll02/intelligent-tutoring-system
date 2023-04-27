import React, {useState, useEffect} from 'react';
import { stemmer } from 'stemmer';
import intents from '../data/intents.json'
import * as tf from '@tensorflow/tfjs';
import * as math from 'mathjs';

function NeuralNet() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        let words = [];
        let labels = [];
        let docs_x = [];
        let docs_y = [];

        let predResult;
        let maxIndex;
        let tag;
        let responses = [];
        let randIndex;

        const data = intents.intents;

        for (let intent of data) {
            for (let pattern of intent.patterns) {
                let tokenised_words = pattern.split(" ");
                words = words.concat(tokenised_words);
                docs_x.push(tokenised_words);
                docs_y.push(intent.tag);
            }
            
            if (!labels.includes(intent.tag)) {
                labels.push(intent.tag);
            }
        }

        words = words.filter(w => w !== "?").map(w => stemmer(w.toLowerCase()));

        words = [...new Set(words)].sort();

        labels = labels.sort();

        let training = [];
        let output = [];
        let out_empty = new Array(labels.length).fill(0);

        let bag = [];
        let output_row = [];

        for (let x = 0; x < docs_x.length; x++) {
            let doc = docs_x[x];

            // stem each word
            let tokenised_words = doc.map(w => stemmer(w));

            // create bag of words and one hot encode
            for (let w of words) {
                if (tokenised_words.includes(w)) {
                    bag.push(1);
                } else {
                    bag.push(0);
                }
            }

            output_row = [...out_empty];
            output_row[labels.indexOf(docs_y[x])] = 1;
        }

        training.push(bag);
        output.push(output_row);

        console.log("Training:", training)

        trainModel(data, training, responses, output, predResult, words, maxIndex, tag, randIndex, labels, responses => {
            setResponse(responses);
        })
    }, [])

    return response;
}

async function trainModel(data, training, responses, output, predResult, words, maxIndex, tag, randIndex, labels, callback) {
    const model = tf.sequential();

    model.add(tf.layers.dense({
        units: 8,
        inputShape: [training[0].length],
        activation: 'sigmoid'
    }));
    model.add(tf.layers.dense({
        units: 8,
        activation: 'sigmoid'
    }));
    model.add(tf.layers.dense({
        units: output[0].length,
        activation: 'softmax'
    }));

    model.compile({loss: 'meanSquaredError', optimizer: 'adam'});

    // training = math.reshape(training, [203, 453])
    training = tf.tensor(training);
    output = tf.tensor(output);

    const predictInput = "I'm not sure if I'm pointing the right direction.";
    
    // Check if model exists
    // If yes - load, If no - train model
    try {
        console.log("Found model");
        const model = await tf.loadLayersModel('localstorage://my-model-1');
        
        console.log(training.size)
        const bag = BagOfWords(predictInput, words)
        const prediction = model.predict(tf.tensor2d(bag, [1, training.size]));

        prediction.array().then(result => {
            predResult = result;
            console.log("Results:", predResult)
        }).then(() => {
            console.log("Res arr length:", predResult[0].length);
            maxIndex = predResult[0].indexOf(Math.max(...predResult[0]))
        }).then(() => {
            tag = labels[maxIndex];
        }).then(() => {
            for (let intent of data) {
                if(tag === intent.tag) {
                    responses.push(intent.responses)
                }
            }
        }).then(() => {
            // Choose a random response
            randIndex = Math.floor(Math.random() * responses[0].length);
            // console.log("rand index:", responses[0][randIndex]);
            const response = callback(responses[0][randIndex]);
            return response;
        });
    } catch (error) {
        console.log("No model found:", error);
        await model.fit(training, output, {
            epochs: 1000,
            batchSize: 8
        }, model.save('localstorage://my-model-1'));
    }
}

// trainModelOutput.then((value) => {
//     console.log("Final", value)
// })

function BagOfWords(sentence, words) {
    const bag = new Array(words.length).fill(0);

    const s_words = sentence.split(' ').map(word => stemmer(word.toLowerCase()));

    for (const se of s_words) {
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (w === se) {
        bag[i] = 1;
        }
    }
    }

    return bag;
}

export default NeuralNet;
