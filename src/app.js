import "bootstrap";
import "./style.css";


import "./assets/img/4geeks.ico";

window.onload = function() {
  
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let rdmWho = Math.floor(Math.random() * who.length);
  let rdmAction = Math.floor(Math.random() * action.length);
  let rdmWhat = Math.floor(Math.random() * what.length);
  let rdmWhen = Math.floor(Math.random() * when.length)

  let finalExcuse= who[rdmWho] + "The dog" + action[rdmAction] + "ate"+ what [rdmWhat] +" my homework" + when[rdmWhen]; 

 
  document.querySelector("#excuse").innerHTML= finalExcuse;
 };