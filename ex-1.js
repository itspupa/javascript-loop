const studentScores = [89,70,60,50,100,71];
const updatedScores = []
for (let newScores of studentScores){
    newScores = newScores - 10;
    updatedScores.push(newScores);
};
console.log(updatedScores);