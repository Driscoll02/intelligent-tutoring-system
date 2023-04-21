import { stemmer } from 'stemmer';
import intents from '../data/intents.json'
import * as tf from '@tensorflow/tfjs';
import * as math from 'mathjs';

function NeuralNet() {
    let words = [];
    let labels = [];
    let docs_x = [];
    let docs_y = [];

    const data = intents.intents;

    for (let intent of data) {
        for (let pattern of intent.patterns) {
            let tokenized_words = pattern.split(" ");
            words = words.concat(tokenized_words);
            docs_x.push(tokenized_words);
            docs_y.push(intent.tag);
        }
        
        if (!labels.includes(intent.tag)) {
            labels.push(intent.tag);
        }
    }

    words = words.filter(w => w !== "?").map(w => stemmer(w.toLowerCase()));
   
    words = [...new Set(words)].sort();

    labels = labels.sort();

    // create bag of words (one hot encode)
    let training = [];
    let output = [];
    let out_empty = new Array(labels.length).fill(0);

    for (let x = 0; x < docs_x.length; x++) {
        let doc = docs_x[x];
        let bag = [];
    
        // split each word into characters
        let tokenized_words = doc.map(w => stemmer(w));
    
        // one hot encode
        for (let w of words) {
            if (tokenized_words.includes(w)) {
                bag.push(1);
            } else {
                bag.push(0);
            }
        }
    
        let output_row = [...out_empty];
        output_row[labels.indexOf(docs_y[x])] = 1;
    
        training.push(bag);
        output.push(output_row);
    }

    async function trainModel() {
        const model = tf.sequential();

        model.add(tf.layers.dense({
            units: 8,
            inputShape: [training[0].length]
        }));
        model.add(tf.layers.dense({
            units: 8
        }));
        model.add(tf.layers.dense({
            units: output[0].length,
            activation: 'softmax'
        }));

        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

        training = math.reshape(training, [203, 377])
        training = tf.tensor(training);
        output = tf.tensor(output);
        
        // Check if model exists
        // If yes - load, If no - train model
        try {
            console.log("Found model");
            await tf.loadLayersModel('localstorage://my-model-1');
        } catch (error) {
            console.log("No model found:", error);
            await model.fit(training, output, {
                epochs: 1000,
                batchSize: 8
            }, model.save('localstorage://my-model-1'));
        }
    }

    trainModel();

}

export default NeuralNet;
