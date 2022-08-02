import { useEffect, useState } from "react";
import { buttons, ids, keys, pressBtn } from "./adapters";
import "./App.scss";

// Create a component to represent the calculator
function App() { 
  const [content, setContent] = useState("0");
  const [msg, setMsg] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  
  function handlePress(btn:any){
    const {newContent, newMsg} = pressBtn(btn);
    setContent(newContent);
    setMsg(newMsg);
    setKeyPressed(btn.id);
    setTimeout(() => {setKeyPressed("")}, 100);
  }
  
  // Simulate a click when a key related with the calculator is pressed
  function selectKey(e:any){
    if(keys.includes(e.key)){
      const index = keys.indexOf(e.key);
      const id = ids[index];
      const targetKey = document.getElementById(id);
      targetKey?.click();
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", selectKey);
    return () => (document.removeEventListener("keydown", selectKey));
  }, [selectKey]);
  
  return (
    <div className="calculator">
      <div className="screen">
        <div className="msg">{msg}</div>
        <div id="display" className="display">{content}</div>
      </div>
      {
        buttons.map(btn => (
          <button key={btn.id} className={`btn${(btn.id === keyPressed) ? " btn--pressed" : ""}`} id={btn.id} onClick={() => handlePress(btn)}>{btn.symbol}</button>
        ))
      }
    </div>
  )
} 

export default App;