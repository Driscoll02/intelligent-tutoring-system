import { stemmer } from 'stemmer';
import { curriculumData } from '../data/curriculum';
import stringSimilarity from 'string-similarity';
import Sentiment from 'sentiment';

class Similarity {
    constructor() {
        this.state = {
            similarityScore: 0,
            studentAnswer: '',
            possibleTeacherAnswers: ['This', 'Is', 'A', 'Test'],
        }

        this.tokeniseStemString = this.tokeniseStemString.bind(this);
        this.getBestMatch = this.getBestMatch.bind(this);
    }

    tokeniseStemString(text) {
        console.log("Text: ", text);
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