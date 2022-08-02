import DisplayInterface from "./interface";

class Display implements DisplayInterface {
  initialContent: string;
  content: string;
  msg: string; 
  constructor(initialContent: string = "0", msg: string = "") {
    this.initialContent = initialContent;
    this.content = initialContent;
    this.msg = msg; 
  }
  isInInitialState = () => (this.content === this.initialContent);
  setContent = (newContent: string) => {
    if(newContent !== this.content)this.content = newContent;
  }
  setMsg = (newMsg:string) => {
    if(newMsg !== this.msg) this.msg = newMsg;
  }
  clear = () => {
    this.content = this.initialContent;
    this.msg = "";
  };
}

export default Display;
