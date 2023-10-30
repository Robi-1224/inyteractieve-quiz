
// The buttons/ should change it to an array
let myButton;
let myButton2;
let myButton3;
let myButton4;
let myButton5;

let score = 0;
let currentQuestion =0;

// questions/answers

let quizContents = [
  {
   question: "what color is an apple?",
   response: [ ["Yellow"], ["Red / Green"], ["Magenta"], ["Blue"] ], 
   answer:[1]
  },
  {
    question: 'How tall was the world trade center?',
    response: [ "420 meters", "490 meters", "415 meters", "500 meters"],
    answer:[2]
  },
  {
    question: "At what height are you offically in space?",
    response:  [ "90Km", "200Km", "100Km", "500Km"],
    answer:[2]
  }
 ];




function setup() {
  createCanvas(400, 400);

 // draws the layout of the quiz
  myButton = new Button(quizContents[0].question,40,40,180,40);
  myButton.onClick = function(){myButtonConsole  ("Button one pressed!")};

  myButton2 = new Button(quizContents[0].response ,40 ,120, 100, 30);
  myButton2.onClick = function(){myButtonConsole("Button two pressed!")};

  myButton3 = new Button(quizContents[0][1], 160, 120, 100, 30);
  myButton3.onClick = function(){myButtonConsole("Button three pressed!")};

  myButton4 = new Button (quizContents[0][2], 40, 160,100,30);
  myButton4.onClick = function(){myButtonConsole("Button four pressed!")};

  myButton5 = new Button (quizContents[0][3],160, 160, 100, 30 );
  myButton5.onClick = function(){myButtonConsole("Button five pressed!")};
}

// checks if the mouse press is detected shows in the console
function myButtonConsole(a){
  console.log(a);

}

function draw() {
  background(220);

  myButton.display();
  myButton2.display();
  myButton3.display();
  myButton4.display();
  myButton5.display();
}

function correctAnswer(){
  let response = window.prompt(quizContents[i].lenght);

  for(i=0; i<quizContents.length; i++){
    if(response === quizContents[i].answer){
      score++;
      currentQuestion++;
      console.log(quizContents[i].question);
    }
  }

    
}


