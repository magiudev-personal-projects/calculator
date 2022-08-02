export const getResultWhenTryToRemove = (displayContent: string, numOfCharsToRemove: number): string  => {
    const numOfCharsInContent = displayContent.replace(/ /g, "").length;
    const desiredNumOfChars = numOfCharsInContent - numOfCharsToRemove;
    let newContent = "";
    let index = 0;
    let charsAdded = 0; 
    while(charsAdded < desiredNumOfChars) {
      newContent += displayContent[index];
      index++;
      if(displayContent[index] !== " ") charsAdded++;
    }
    if(/ $/.test(newContent)) newContent = newContent.slice(0, -1);
    return (newContent.length < 1) ? "0": newContent; 
}