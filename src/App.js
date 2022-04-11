import useGame from "./useGame";
function App() {
  
  const {textareaRef,
          isGamerunning,
          text,
          handleChange,
          timeRemaining,
          StartGame,
    wordCount}=useGame()
  
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
