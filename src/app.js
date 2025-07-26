import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let myParagraph = document.getElementById('excuse');
  myParagraph.innerHTML = getExcuse();
};


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getExcuse()
{
  let excuse_who = who[getIndex(4)];
  let excuse_action = action[getIndex(4)];
  let excuse_what = what[getIndex(3)];
  let excuse_when = when[getIndex(5)];

  let excuse = excuse_who + ' ' + excuse_action + ' ' + excuse_what + ' ' + excuse_when;
  return excuse;
}

function getIndex(max)
{
  let num = Math.floor(Math.random() * max);
  return num;
}