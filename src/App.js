import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import React from 'react';


function App() {

const [recording , setRecording]= useState("");




//Below adds an event listener to allow keyboard uses. The key.UpperCase() is used due to the event registering lowercase numbers when a key 
//is pressed on the keyboard ,therefore, making it not equal to requested keyTrigger. 

useEffect(()=>{

  document.addEventListener("keydown", (event)=>{ 
   playSound(event.key.toUpperCase());
  
    });
  },[]);


  function playSound (selectedText){
    const audioTag= document.getElementById(selectedText);
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording(selectedText);
   
    }
  
  
 
   /*function handleKey(event){
      if(event.keyCode === drumPadBank.keyCode){
        playSound(event.key.toUpperCase());
      }
      
       }
     */ 
  
  

  return (
    <div className="App">
      
      <div id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
      <div className='buttons'>{drumPadBank.map((drumPad)=>(
        <button key={drumPad.keyCode} className="drum-pad" id={`drum-${drumPad.keyTrigger}`} onClick={()=>{playSound(drumPad.keyTrigger)}}>
        {drumPad.keyTrigger}
    <audio className="clip" id={drumPad.keyTrigger} src={drumPad.url} ></audio>
    </button>
      ))}
  </div>
  <h2 > This button was clicked: {recording}</h2>
       </div>  
       <div className='footer'>- by E-Rolle</div>  
       </div>
    </div>
  );
}

export default App;



const drumPadBank = [

  {  keyCode: 81,
     id: "Q-key",
     keyTrigger: 'Q',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
   },
   { keyCode: 87,
     id: "W-key",
     keyTrigger: 'W',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
   },
   { keyCode: 69,
     id: "E-key",
     keyTrigger: 'E',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
   },
   { keyCode: 65,
     id: "A-key",
     keyTrigger: 'A',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
   },
   { keyCode: 83,
     id: "S-key",
     keyTrigger: 'S',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
   },
   { keyCode: 68,
     id: "D-key",
     keyTrigger: 'D',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
   },
   { keyCode: 90,
     id: "Z-key",
     keyTrigger: 'Z',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
   },
   { keyCode: 88,
     id: "X-key",
     keyTrigger: 'X',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
   },
  { keyCode: 67,
    id: "C-key",
     keyTrigger: 'C',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
   }
 ];








//Below is pieces of code that will be used in the next version to creat the same thing
/*const {keynote,setKey}=React.useState("");
  const{keyAudio,setKeyAudio}=React.useState("");

useEffect(()=>{

  document.addEventListener("keydown", handleKey);
  return ()=>{
  document.removeEventListener("keydown", handleKey)
  }
  },[]);


 const handleKey = (event)=>{
if(event.keyCode === keyPad.keyCode){
  playSound();
}

 }


const AssignKeyAndSound=()=>{

if (bankOne.includes() === keynote){
  setKey(bankOne.keyTrigger)
  setKeyAudio(bankOne[keynote].url)

}
}
<div
onChange={(event)=>setKey{e.target.value}} value={keynote}
/>
*/

// <button key={drumPad.src} className="drum-pad" id={`drum-${drumPad.keyTrigger}`} onClick={()=>{playSound(drumPad.keyTrigger)}}>