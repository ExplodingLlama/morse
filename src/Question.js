import React, { Component } from "react";
//import Tone from "tone";

//const synth = new Tone.Synth().toMaster();

const morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
};

class Question extends Component {
  getQuestion = () => {
    let index = Math.floor(Math.random() * 25);
    let character = String.fromCharCode("a".charCodeAt() + index);
    let code = morse[character];
    console.log(code);
    return code;
  };
  render() {
    return (
      <div>
        What is the tone?
        {this.getQuestion()}
      </div>
    );
  }
}

export default Question;
