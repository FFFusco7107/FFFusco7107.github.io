// Progress Tracker First Draft
// Lucas F
// May 30, 2026
// A life tracker where the user can track their progress in different areas of their life, such as the gym, healthy eating, schoolwork, learning new skills, etc.
// the user can plug in what things they did that day and for how long and the code will output how many points they got that day. The points can be tallied up over many days
// and the user can climb up the ranks by getting more and more points. 


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // calculatePoints();
}
function calculatePoints() { // input data into program and calculate points
  let time = 0;
  let totalPoints = 0;
  
  for(let i = 0; i < 4; i++) { // loop to allow user to input multiple activities 
    let points = 0;
    let activity = prompt("What activity did you do today? (gym, healthy eating, schoolwork, learning new skills, etc.)");

    if(activity === "gym") {
      time = Number(prompt("How many minutes did you spend at the gym?"));
      points = time * 2; // 2 points per minute at the gym
    }
    else if(activity === "healthy eating") {
      time = Number(prompt("How many healthy foods did you eat today?"));
      points = time * 5; // 5 points for healthy foods
      time = Number(prompt("How many unhealthy foods did you eat today?"));
      points -= time * 3; // -3 points for unhealthy foods
    }
    else if(activity === "schoolwork") {
      time = prompt("do you have any schoolwork that needs to be done? (yes or no)");
      if(time === "yes") {
        time = Number(prompt("How many minutes did you spend on schoolwork today?"));
        points = time * 3; // 3 points per minute of schoolwork
      }
      else{
        points = 0; // no points if no schoolwork
      }
    }
    else{
      time = Number(prompt("How many minutes did you spend learning new skills today?"));
      points = time * 5; // 5 points per minute of learning new skills
    }
    totalPoints += points; // add points to total points
  }
  alert("You earned " + totalPoints + " points today!");
}