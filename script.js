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

var header = document.getElementById('header');
var headerText = "Listen to your Heart";

var headerColor = 'rgba(0,0,255,1)';
var colorNote = 'rgba(0,200,255,1)';
var colorTop = 'rgba(0,0,255,1)';

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
///////////////////////////////////// THIS DOESNT WORK FOR SOME REASON
function clickButton(note){
 colorNote = 'rbga(255,200,255,1)';
 anime({
   targets: "button.note",
  delay: anime.stagger(100, {start: 300}),
  background: [{value: colorNote,duration: 2000}],
 });
}
////////////////////////////////////
function animateButton(note,scale) {
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
  var num = Math.floor(Math.random() * 4);
    if(num == 0){
      if(headerText != "Play Some Notes"){
        headerText = "Play Some Notes";
      }
      else{
        headerText = "Take a Deep Breathe";
      }
    }
    else if(num == 1){
      if(headerText != "Take a Deep Breathe"){
        headerText = "Take a Deep Breathe";
      }
      else{
        headerText = "It's all for You";
      }

    }
    else if(num == 2){
      if(headerText != "It's all for You"){
        headerText = "It's all for You";
      }
      else{
        headerText = "Listen to Your Heart";
      }
    }
    else{
      if(headerText != "Listen to Your Heart"){
        headerText = "Listen to Your Heart";
      }
      else{
        headerText = "Play Some Notes";
      }
    }
  }

function eventAdder(note){
  note.addEventListener('mouseenter', function(){enterButton(note);}, false);
  note.addEventListener('mouseleave', function(){leaveButton(note);}, false);
  note.addEventListener('click',function(){clickButton(note);},false); //// LISTENER
}
function enterButton(note) { animateButton(note,1.2) };
function leaveButton(note) { animateButton(note,1.0) };
function loadEvents(){
 eventAdder(noteC[0]);
 eventAdder(noteD[0]);
 eventAdder(noteE[0]);
 eventAdder(noteF[0]);
 eventAdder(noteG[0]);
 eventAdder(noteA[0]);
 eventAdder(noteB[0]);
 eventAdder(noteHighC[0]);

 eventAdder(noteCsharp[0]);
 eventAdder(noteDsharp[0]);
 eventAdder(noteFsharp[0]);
 eventAdder(noteGsharp[0]);
 eventAdder(noteAsharp[0]);
}
