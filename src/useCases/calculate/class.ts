import Button from "../../entities/button/class";
import DisplayInterface from "../../entities/display/interface";

class CalculateBtn extends Button {
    getResultWhenTryToCalculate: Function; 
    constructor (id: string, key: string, symbol: string, display: DisplayInterface, getResultWhenTryToCalculate: (displayContent: string) => {msg: string, result: string}) {
        super(id, key, symbol, display);
        this.getResultWhenTryToCalculate = getResultWhenTryToCalculate; 
    }
    action = () => {
        const {msg, result} = this.getResultWhenTryToCalculate(this.display.content);
        this.display.setMsg(msg);
        this.display.setContent(result)
    }
}

export default CalculateBtn;