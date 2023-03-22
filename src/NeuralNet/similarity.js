import { stemmer } from 'stemmer';
import { curriculumData } from '../data/curriculum';
import stringSimilarity from 'string-similarity';

class Similarity {
    constructor() {
        this.state = {
            similarityScore: 0,
            studentAnswer: '',
            possibleTeacherAnswers: [],
        }
    }

    tokeniseStemString() {
        const tokenisedStudentAnswer = this.state.studentAnswer.split(" ");
        const stemmedString = stemmer(tokenisedStudentAnswer)
        return stemmedString;
    }

    getBestMatch() {
        return stringSimilarity.findBestMatch(this.tokeniseStemString(), this.state.possibleTeacherAnswers);
    }
}

export default Similarity;