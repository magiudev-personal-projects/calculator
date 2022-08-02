interface BinaryOp {
    [key: string]: (a: number, b: number) => number;
}

export const getResultWhenTryToCalculate = (opsSolver:(arr: string, targetOps: BinaryOp) => string, opsHierarchy: BinaryOp[]) => {
    return (displayContent: string) => {
    
        if(/ ?[-\+\*\/]$/.test(displayContent)) return { msg: "The last input is an operator", result: displayContent}; 
        if(/ \.$/.test(displayContent)) return { msg: "The last input is a decimal sign", result: displayContent}; 
    
        // const displayArr = displayContent.split(" ");
        const opsHierarchyLevels = opsHierarchy.length;
        let newDisplay = displayContent;
        for(let level = 0; level < opsHierarchyLevels; level++){
            newDisplay = opsSolver(newDisplay, opsHierarchy[level]);
            if(newDisplay.includes("Infinity")) return {msg: "Cannot divide by zero", result: displayContent};
        }
        if(/\.\d\d\d\d\d\d\d\d\d+$/.test(newDisplay)) newDisplay = `${parseFloat(newDisplay).toFixed(8)}`;
        return {msg: displayContent + " = ", result: newDisplay};
    }
}

export const binaryOpSolver = (displayContent: string, targetOps:BinaryOp): string => {
    const newArr = displayContent.split(" "); 
    let i = 0
    while(i < newArr.length) {
      
      // If find an operation symbol replace the operands and the operator by the result
      if(Object.keys(targetOps).includes(newArr[i])){
        const prevNum = Number(newArr[i - 1]);
        const postNum = Number(newArr[i + 1]);
        const result = targetOps[newArr[i]](prevNum, postNum);
        newArr.splice(i - 1, 3, String(result));
      } else i++;
    }
    const newString = newArr.toString().replace(/,/g, " ");
    return newString;
}

export const opsHierarchy: BinaryOp[] = [  
    {
      "*": (a:number, b: number) => (a * b),
      "/": (a:number, b: number) => (a / b)
    },
    {
      "+": (a:number, b: number) => (a + b),
      "-": (a:number, b: number) => (a - b),
    }
]