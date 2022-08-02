import Button from "../../entities/button/class";
import DisplayInterface from "../../entities/display/interface";

class CharsAdderBtn extends Button {
    getResultWhenTryToAdd: Function; 
    constructor (id: string, key: string, symbol: string, display: DisplayInterface, getResultWhenTryToAdd:(displayContent: string) =>string) {
        super(id, key, symbol, display);
        this.getResultWhenTryToAdd = getResultWhenTryToAdd; 
    }
    action() {
        const newContent = this.getResultWhenTryToAdd(this.display.content); 
        this.display.setContent(newContent);
    }
}

export default CharsAdderBtn;