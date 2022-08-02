import Button from "../../entities/button/class";
import DisplayInterface from "../../entities/display/interface";

class CharsRemoverBtn extends Button {
    numOfCharsToRemove: number;
    getResultWhenTryToRemove: Function;
    constructor (id: string, key: string, symbol: string, display: DisplayInterface, numOfCharsToRemove:number, getResultWhenTryToRemove: (displayContent: string, numOfCharsToRemove: number) => string) {
        super(id, key, symbol, display)
        this.numOfCharsToRemove = numOfCharsToRemove;
        this.getResultWhenTryToRemove = getResultWhenTryToRemove; 
    }
    action = () => {
        const newContent = this.getResultWhenTryToRemove(this.display.content, this.numOfCharsToRemove);
        this.display.setContent(newContent)
    };
}

export default CharsRemoverBtn;