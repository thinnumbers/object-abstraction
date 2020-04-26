//var pianoNote = document.getElementsByClassName('note');
var noteC = document.getElementsByClassName('noteC');
var noteD = document.getElementsByClassName('noteD');
var noteE = document.getElementsByClassName('noteE');
var noteF = document.getElementsByClassName('noteF');
var noteG = document.getElementsByClassName('noteG');
var noteA = document.getElementsByClassName('noteA');
var noteB = document.getElementsByClassName('noteB');
var noteHighC = document.getElementsByClassName('noteHighC');

var noteCsharp = document.getElementsByClassName('noteCsharp');
var noteDsharp = document.getElementsByClassName('noteDsharp');
var noteFsharp = document.getElementsByClassName('noteFsharp');
var noteGsharp = document.getElementsByClassName('noteGsharp');
var noteAsharp = document.getElementsByClassName('noteAsharp');

var allNotes = document.getElementsByClassName('note');
var allNoteTops = document.getElementsByClassName('noteTop');
var header = document.getElementById('header');
var headerText = "Listen to your Heart";

var headerColor = 'rgba(255,255,255,1)';
var colorNote = 'rgba(255,255,255,1)';
var colorTop = 'rgba(0,0,0,1)';

var piano = new Tone.Synth().toMaster();
var reverb = new Tone.Reverb ( [200] ).toMaster();


function init(){
  anime({ // note initial animation
    targets: "button.note",
   translateY: [
     {value: 100, duration: 600}
   ],
   delay: anime.stagger(100, {start: 300}),
   background: colorNote,
  });

  anime({ // black note initial animation
    targets: "button.noteTop",
   translateY: [
     {value: 100, duration: 600}
   ],
   delay: anime.stagger(100, {start: 300}),
   background: colorTop,
  });

  anime({ // header initial animation
    targets: "#header",
   translateX: [
     {value: 100, duration: 3000}
   ],
   delay: anime.stagger(100, {start: 300}),
   color: [{value: headerColor, duration: 3000}],
  });
  loadEvents();
  window.setTimeout(headerChangeAnimation, 6000);
}

function clickButton(note,letter,section){
  changeColor(note,section);
  notePlay(note,letter);
  noteCheck(note,letter);
  window.setTimeout(noteDoubleReset,3000);
}

function changeColor(note,section){
  if(section <= 1){ // black
  colorNote = 'rgba(255,255,255)';
  colorTop = 'rgba(0,0,0)';
  }
  else if(section <= 2 && section > 1){ //orange
    colorNote = 'rgba(250,150,0)';
    colorTop = 'rgba(200,0,0)';
  }
  else if(section <= 3 && section > 2){ //yellow
    colorNote = 'rgba(255,250,0)';
    colorTop = 'rgba(150,200,0)';
  }
  else if(section <= 4 && section > 3){// green
    colorNote = 'rgba(0,255,0)';
    colorTop = 'rgba(0,150,0)';
  }
  else if(section <= 5 && section > 4){ // blue
    colorNote = 'rgba(0,200,255,1)';
    colorTop = 'rgba(0,0,255,1)';
  }
  else if(section <= 6 && section > 5){ // pink
    colorNote = 'rgba(205,50,205)';
    colorTop = 'rgba(105,0,105)';
  }
  else if(section <= 7 && section > 6){ // purple
    colorNote = 'rgba(255,200,255)';
    colorTop = 'rgba(255,100,255)';
  }
  else{ //white
    colorNote = 'rgba(0,0,0)';
    colorTop = 'rgba(255,255,255)';
  }
 headerColor = colorNote;
  anime({
    targets: "button.note" ,
    background: [{value: colorNote, duration:2500}],
    elasticity: 400
  });
  anime({
    targets: "button.noteTop" ,
    background: [{value: colorTop, duration:2500}],
    elasticity: 400
  });
  anime({
    targets: "#header" ,
    color: [{value: headerColor, duration:2500}],
    elasticity: 400
  });
  anime({
    targets: "body" ,
    background: [{value: colorTop, duration:2500}],
    elasticity: 400
  });
}

function noteCheck(note,letter){
  var n = letter.length;
  if(n == 2){
  anime({
    targets: note ,
    background: [{value: 'rgba(255,0,0,1)',duration: 2500}, {value: colorNote, duration:2500}],
    elasticity: 400
  });
}
else{
  anime({
    targets: note ,
    background: [{value: 'rgba(255,0,0,1)',duration: 2500}, {value: colorTop, duration:2500}],
    elasticity: 400
  });
}
}

function noteDoubleReset(){
  anime({
    targets: "button.note" ,
    background: [{value: colorNote, duration:2500}],
    elasticity: 400
  });
  anime({
    targets: "button.noteTop" ,
    background: [{value: colorTop, duration:2500}],
    elasticity: 400
  });
}
function notePlay(note,letter){
  piano = new Tone.Synth().toMaster();
  piano.triggerAttackRelease(letter, '1n');
}
function animateButton(note,scale,section) {
  anime({
    targets: note,
    scale: scale,
    duration: 600,
    elasticity: 400
  });
}

function headerChangeAnimation(){
  anime({ // header initial animation
    targets: "#header",
   translateX: [
     {value: 50, duration: 3000}],
   delay: anime.stagger(100, {start: 300}),
   color: [{value: 'rgba(0,0,0,0)', duration: 600}],
  });
  window.setTimeout(changeHeader, 700);
}
function changeHeader(){

  anime({ // header initial animation
    targets: "#header",
   translateX: [
     {value: 100, duration: 3000}
   ],
   delay: anime.stagger(100, {start: 300}),
   color: [{value: headerColor, duration: 3000}],
  });
 header.innerHTML = headerText;
 headerTextSwitch();
 window.setTimeout(headerChangeAnimation, 6000);
}
function headerTextSwitch(){

      if(headerText == "Play Some Notes"){
        headerText = "Take a Deep Breath";
      }
      else if(headerText == "Take a Deep Breath"){
        headerText = "It's all for You";
      }
      else if(headerText == "It's all for You"){
        headerText = "Listen to Your Heart";
      }
      else{
        headerText = "Play Some Notes";
      }
    }


function eventAdder(note,letter,section){
  note.addEventListener('mouseenter', function(){enterButton(note);}, false);
  note.addEventListener('mouseleave', function(){leaveButton(note);}, false);
  note.addEventListener('click',function(){clickButton(note,letter,section);},false); //// LISTENER
}
function enterButton(note) { animateButton(note,1.2) };
function leaveButton(note) { animateButton(note,1.0) };
function loadEvents(){
 eventAdder(noteC[0],"C4",1);
 eventAdder(noteD[0],"D4",2);
 eventAdder(noteE[0],"E4",3);
 eventAdder(noteF[0],"F4",4);
 eventAdder(noteG[0],"G4",5);
 eventAdder(noteA[0],"A4",6);
 eventAdder(noteB[0],"B4",7);
 eventAdder(noteHighC[0],"C5",8);

 eventAdder(noteCsharp[0],"C#4",1.5);
 eventAdder(noteDsharp[0],"D#4",2,5);
 eventAdder(noteFsharp[0],"F#4",4,5);
 eventAdder(noteGsharp[0],"G#4",5.5);
 eventAdder(noteAsharp[0],"A#4",6.5);
}
