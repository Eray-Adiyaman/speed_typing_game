 import {useEffect,useState,useRef} from "react"
 function useGame(startingtime=10){

  const textareaRef= useRef(null);
  const [text,setText] = useState("");
  const [timeRemaining,setTimeremaining] = useState(startingtime)
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
    setTimeremaining(startingtime)
  }


  const handleChange =(event)=>{
    const {value} = event.target
    setText(value)
  }

  const countWords =(text)=>{
      const countArr =  text.split(/[^\s]+/).length-1;
      setWordcount(countArr)
   } 


   return {textareaRef,isGamerunning,text,handleChange,timeRemaining,StartGame,wordCount}

 }

 export default useGame