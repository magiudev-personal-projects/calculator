import DisplayInterface from "../display/interface";

abstract class Button {
    id: string; 
    key: string; 
    symbol: string; 
    display: DisplayInterface;
    constructor(id: string, key: string, symbol: string, display: DisplayInterface) {
      this.id = id;
      this.key = key;
      this.symbol = symbol;
      this.display = display;
    }
}
export default Button;