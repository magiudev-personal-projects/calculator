import display from "../../entities/display";
import CharsRemoverBtn from "./class";
import { getResultWhenTryToRemove } from "./libs";

export const backspace = new CharsRemoverBtn("backspace", "Backspace", "C", display, 1, getResultWhenTryToRemove);