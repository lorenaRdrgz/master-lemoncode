import getAverage, {getTotalScore} from "./averageService.js"

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAverage(scores);
const totalScore = getTotalScore(scores);
const messageToDisplay = `The average score is ${averageScore}. The total score is ${totalScore}.`

document.write(messageToDisplay); 