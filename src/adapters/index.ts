import display from "../entities/display";
import { decimal, numsBtns, opsBtns, zero } from "../useCases/addChars";
import CharsAdderBtn from "../useCases/addChars/class";
import { equals } from "../useCases/calculate";
import CalculateBtn from "../useCases/calculate/class";
import { clear } from "../useCases/clearBtn";
import ClearBtn from "../useCases/clearBtn/class";
import { backspace } from "../useCases/removeChars";
import CharsRemoverBtn from "../useCases/removeChars/class";

export const buttons = [zero, ...numsBtns,  decimal, ...opsBtns, clear, backspace, equals];
export const keys = buttons.map(btn => btn.key);
export const ids = buttons.map(btn => btn.id);
export const pressBtn = (btn:CharsAdderBtn | ClearBtn | CharsRemoverBtn | CalculateBtn) => {
  btn.action();
  return {newContent: display.content, newMsg: display.msg};
}