const score = prompt("Please enter your score: ", "Score")
const passingGrade = 60
if ((score) >= (passingGrade) && (score) < 100){
    console.log("Passed")
}else if ((score) == 100){ 
    console.log("Perfect score")
}else {
    console.log("Failed")
}
