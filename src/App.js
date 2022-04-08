import { useEffect, useState } from "react";

function App() {
  
  const START_TIME=10;

  const [text,setText] = useState("");
  const [timeRemaining,setTimeremaining] = useState(START_TIME)
  const [wordCount,setWordcount]=useState(0)

  const handleChange =(event)=>{
      const {value} = event.target
      setText(value)
    }
  
  useEffect(()=>{
    if(timeRemaining > 0){
      setTimeout(() => {
        setTimeremaining(prev => prev-1)
      }, 1000);
    }else if(timeRemaining ===0){
      countWords(text)
    }
  },[timeRemaining])  

  const countWords =(text)=>{
      const countArr =  text.split(/[^\s]+/).length-1;
      setWordcount(countArr)
   } 
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea 
          value={text}
          onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining} </h4>
      <button>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
