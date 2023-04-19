import { curriculumData } from '../data/curriculum';
import * as tf from '@tensorflow/tfjs';

function TextGen() {

    // Process data
    const year1Data = curriculumData[0][0][0].questions
    console.log(year1Data)

    console.log("Question type:", year1Data[0].question.toString());
    console.log("Positive feedback type:", typeof(year1Data[0].possibleFeedback.positiveFeedback));
    console.log("Negative feedback type:", typeof(year1Data[0].possibleFeedback.negativeFeedback));

    function buildTrainModel() {
        // Define the model architecture
        const model = tf.sequential({
            layers: [
            // Add an LSTM layer
            tf.layers.lstm({
                units: 64, // Number of LSTM units
                inputShape: [1, 4], // Input shape: [time steps, input size]
                activation: 'tanh', // Activation function
                recurrentActivation: 'sigmoid' // Recurrent activation function
            }),
            // Add a dense layer for output
            tf.layers.dense({
                units: 2, // Number of output units (positive feedback, negative feedback)
                activation: 'softmax' // Softmax activation function for probability distribution
            })
            ]
        });

        // Compile the model
        model.compile({
            optimizer: tf.train.adam(),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });

        // Prepare the training data
        const trainingData = tf.tensor2d([
            // Question, Answer, Possible Positive Feedback, Possible Negative Feedback
            ["What number is 1 more than 4?", "5", "This is correct!, Well done!", "7 is not 1 more than 4., This is incorrect, but you're very close!, Remember to count up from 4., Are you sure you counted up, and not down?"],
            ["What number is 5 more than 5?", "10", "This is correct!, Well done!", "12 is not 5 more than 5., This is incorrect, but you're very close!, Remember to count up from 5., Are you sure you counted up, and not down?"],
            ["What number is 2 less than 10?", "8", "This is correct!, Well done!", "4 is not 2 less than 10., This is incorrect, but you're very close!, Remember to count down from the original number., Are you sure you counted down, and not up?"],
            ["Write all the numbers from 1 to 10", "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", "This is correct!, Well done!", "Make sure you count upwards., This is incorrect, but you're very close!, Remember to count up from 1, and add 1 every time., Are you sure you counted up, and not down?, Remember, start from 1 and not 0"],
            ["Put these numbers in order: 5, 16, 18, 2, 3", "2, 3, 5, 16, 18", "This is correct!, Well done!", "Make sure the numbers go upwards., This is incorrect, but you're very close! Try changing some numbers, Remember to count up, you're almost there!, Are you sure your numbers are going up and not down?, Remember, start from the lowest number and go upwards."]
        ]);

        const inputShape = [trainingData.shape[0], 1, trainingData.shape[1]];
        const trainingDataReshaped = trainingData.reshape(inputShape);

        console.log(inputShape)
        console.log("Training data type:", trainingDataReshaped.dtype)
        
        // Prepare the target data
        const targetData = tf.tensor2d([
            // Possible Positive Feedback, Possible Negative Feedback
            ["This is correct!, Well done!", "7 is not 1 more than 4., This is incorrect, but you're very close!, Remember to count up from 4., Are you sure you counted up, and not down?"],
            ["This is correct!, Well done!", "12 is not 5 more than 5., This is incorrect, but you're very close!, Remember to count up from 5., Are you sure you counted up, and not down?"],
            ["This is correct!, Well done!", "4 is not 2 less than 10., This is incorrect, but you're very close!, Remember to count down from the original number., Are you sure you counted down, and not up?"],
            ["This is correct!, Well done!", "Make sure you count upwards., This is incorrect, but you're very close!, Remember to count up from 1, and add 1 every time., Are you sure you counted up, and not down?, Remember, start from 1 and not 0"],
            ["This is correct!, Well done!", "Make sure the numbers go upwards., This is incorrect, but you're very close! Try changing some numbers, Remember to count up, you're almost there!, Are you sure your numbers are going up and not down?, Remember, start from the lowest number and go upwards."],   
        ])

        console.log("target data type:", targetData.dtype)

        const numericTrainingData = tf.strings.toNumber(trainingDataReshaped).cast('float32');
        // tf.cast(targetData, 'float32')

        // Train the model
        model.fit(numericTrainingData, targetData, {
            epochs: 5, // Number of training iterations
            shuffle: true, // Shuffle the training data at each epoch
            validationSplit: 0.2, // Use 20% of the data for validation
            callbacks: {
            // Print training progress to console
            onEpochEnd: (epoch, logs) => {
                console.log(`Epoch ${epoch}: loss = ${logs.loss}, accuracy = ${logs.acc}`);
            }
            }
        });
    }

    buildTrainModel();
}

export default TextGen;