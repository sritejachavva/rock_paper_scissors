/*
Display Score (you: computer: )
Display Input request for rock, paper, scissors:
Randomly Generate rock, paper, scissors for computer:
Determine Winner
Update Score
Ask if you want to play again (if yes, repeat. If no display score and end) 





*/

let computerScore = 0;
let yourScore = 0;
let yourInput = 'temp';
let choices = ['rock', 'paper', 'scissors'];
let total_points = 0;

console.log(`Score: \n Computer: ${computerScore}\n You: ${yourScore}`)

function requestInput(){
    let your_input = "blah";
    while(!choices.includes(your_input)){
        your_input = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        if (your_input == 'quit'){
            break;
        }
    }
    console.log(`your input of ${your_input} is successful`);
    return your_input;
        
}

function computeWinner(computerInput, yourInput){
    let human_point_increment = 0;
    switch(yourInput) {
        case "rock":
          if (computerInput=="paper"){
            return -1;
          }
          else if (computerInput == "scissors"){
            return 1;
          }
          else return 0;
        case "scissors":
            if (computerInput=="rock"){
                return -1;
              }
            else if (computerInput == "paper"){
                return 1;
              }
            else return 0;
        case "paper":
            if (computerInput=="scissors"){
                return -1;
            }
            else if (computerInput == "rock"){
                return 1;
            }
            else return 0;
      }
}
let i = 1;
let points_gained = 0;
console.log("choose rock, paper, or scissors. First to 3 wins. Enter QUIT to quit.");
while (total_points < 3 && total_points >-3){
    console.log(`------------- Round ${i}: -------------`)
    yourInput = requestInput();
    if (yourInput == 'quit'){
        break;
    }
    computerInput = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    console.log(`computer choice is ${computerInput}`);
    points_gained=computeWinner(computerInput,yourInput);
    total_points=points_gained+total_points;
    console.log(`your current score is ${total_points}`);
    switch(points_gained){
        case 1:
            console.log("YOU WIN");
            break;
        case -1:
            console.log("COMPUTER WIN");
            break;
        case 0:
            console.log("TIE");
            break;
    }
    console.log(`------------------------------------`)
    i++;
}

console.log('THE GAME IS FINISHED');
