//src/collect/whoToAsk.js

//Finish this function first > because it's in BOLD.

// ALGORITHM PART! As a Teacher, from the class view I can click a button “ASK A QUESTION”.
// It shows me the name and picture of a random student to ask a question.
// Not entirely random though: RED students get ~53% of the questions YELLOW students ~28%, and GREEN students ~19%.

//Setup fake students with colors in 3 color arrays
const redStudents = ["redStudent1","redStudent2","redStudent3"]
const greenStudents = ["greenStudent1","greenStudent2","greenStudent3","greenStudent4","greenStudent5"]
const yellowStudents = ["yellowStudent1","yellowStudent2","yellowStudent3","yellowStudent4","yellowStudent5", "yellowStudent6"]

//Setup random function

export const semiRandomColor = () => {
    //Random between 1 and 100
    const randomColor = Math.floor(Math.random() * 100)
    let chosenColor
    if (randomColor <= 53) chosenColor = "red"
    if (randomColor > 53 && randomColor <= 81) chosenColor = "yellow"
    if (randomColor > 81) chosenColor = "green"

     // Pass it on to separate function
    semiRandomStudent(chosenColor)

    if (chosenColor = "red" || "green" || "yellow") return true
    
    
}

export const semiRandomStudent = (color) => {
  let luckyStudent
  // Pick random student from 'color' array based on color recieved from semiRandomColor
  if(color === "red" ) luckyStudent = redStudents[Math.floor(Math.random() * redStudents.length)]
  if(color === "yellow" ) luckyStudent = yellowStudents[Math.floor(Math.random() * yellowStudents.length)]
  if(color === "green" ) luckyStudent = greenStudents[Math.floor(Math.random() * greenStudents.length)]

  console.log('And the winner is: ',luckyStudent)
  
}

//Call the function!
semiRandomColor()
