import { stemmer } from 'stemmer';
import stringSimilarity from 'string-similarity';
import Sentiment from 'sentiment';

class Similarity {
    constructor(props) {
        this.state = {
            similarityScore: 0,
            studentAnswer: '',
            // Update possibleTeacherAnswers to get positive and negative responses from intents
            // Use props to determine the current topic and use that to access relevent index
            possibleTeacherAnswers: ['This', 'Is', 'A', 'Test'],
        }

        this.tokeniseStemString = this.tokeniseStemString.bind(this);
        this.getBestMatch = this.getBestMatch.bind(this);
    }

    tokeniseStemString(text) {
        const tokenisedText = text.split("");
        const stemmedString = stemmer(tokenisedText)
        return stemmedString;
    }

    getBestMatch(text) {
        return stringSimilarity.findBestMatch(this.tokeniseStemString(text), this.state.possibleTeacherAnswers);
    }

    analyseSemantics(text) {
        const sentiment = new Sentiment();
        return sentiment.analyze(text);
    }
}

export default Similarity;