// Exercise #1: Decrease the Student Scores
let studentScores = [89, 70, 60, 50, 100, 71];
let scores = [0];
// Start coding here
for (let newscores of studentScores){
    studentScores[scores] = newscores - 10
    scores++
};
console.log(studentScores);