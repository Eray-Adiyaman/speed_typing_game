import { useEffect, useRef, useState } from "react";

function App() {
  
  const START_TIME=10;
  const textareaRef= useRef(null);

  const [text,setText] = useState("");
  const [timeRemaining,setTimeremaining] = useState(START_TIME)
  const [wordCount,setWordcount]=useState(0)
  const [isGamerunning,setIsGamerunning]=useState(false)

  
  useEffect(()=>{
    if(isGamerunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeremaining(prev => prev-1)
      }, 1000);
    }else if(timeRemaining ===0){
      EndGame()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[timeRemaining,isGamerunning])  

  const StartGame =()=>{
    setIsGamerunning(true)
    setText("")
    textareaRef.current.disabled= false
    textareaRef.current.focus()
  }

  const EndGame =()=>{
    setIsGamerunning(false)
    countWords(text)
    setTimeremaining(START_TIME)
  }


  const handleChange =(event)=>{
    const {value} = event.target
    setText(value)
  }

  const countWords =(text)=>{
      const countArr =  text.split(/[^\s]+/).length-1;
      setWordcount(countArr)
   } 
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea 
          ref={textareaRef}
          disabled={!isGamerunning}
          value={text}
          onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining} </h4>
      <button disabled={isGamerunning} onClick={StartGame}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
