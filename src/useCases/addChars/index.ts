import CharsAdderBtn from "./class";
import display from "../../entities/display";
import {
    getResultWhenTryToAddZero, 
    getResultWhenTryToAddDigit,
    getResultWhenTryToAddDot,
    getResultWhenTryToAddOp
} from "./libs";

const operations = [["add", "+"], ["subtract", "-"], ["multiply", "*"], ["divide", "/"]];
const numsIds = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

export const zero = new CharsAdderBtn("zero", "0", "0", display, getResultWhenTryToAddZero);
export const numsBtns = numsIds.map((id, index) => new CharsAdderBtn(id,`${index + 1}`, `${index + 1}`, display, getResultWhenTryToAddDigit(display, `${index + 1}`)));
export const decimal = new CharsAdderBtn("decimal", ".", ".", display, getResultWhenTryToAddDot);
export const opsBtns = operations.map(op => new CharsAdderBtn(op[0], op[1], op[1], display, getResultWhenTryToAddOp(display, op[1])));
