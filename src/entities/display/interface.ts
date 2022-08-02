// Made according the dependency inversion principle (button depends on display)
interface DisplayInterface { 
    content: string; 
    msg: string;
    isInInitialState: () => boolean;
    setContent: (symbol: string) => void; 
    clear:() => void;
    setMsg: (newMsg: string) => void; 
}

export default DisplayInterface;