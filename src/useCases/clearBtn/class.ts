import Button from "../../entities/button/class";
import DisplayInterface from "../../entities/display/interface";

class ClearBtn extends Button {   
    constructor (id: string, key: string, symbol: string, display: DisplayInterface) {
        super(id, key, symbol, display);
    }
    action = () => {this.display.clear()};
}

export default ClearBtn;