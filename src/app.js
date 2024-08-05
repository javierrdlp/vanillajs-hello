/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function choose_one(sentences) {
  let array_position = Math.random() * sentences.length;
  let sentence = sentences[Math.floor(array_position)] + " ";
  return sentence;
}

window.onload = () => {
  let text = "";
  let sentences = [who, action, what, when];
  for (let i = 0; i < 4; i++) {
    text += choose_one(sentences[i]);
  }
  document.querySelector("#excuse").innerHTML = text;
  console.log("Hello Rigo from the console!");
};
