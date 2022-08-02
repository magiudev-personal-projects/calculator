import display from "../../entities/display";
import CalculateBtn from "./class";
import { binaryOpSolver, getResultWhenTryToCalculate, opsHierarchy } from "./libs";

export const equals = new CalculateBtn("equals", "Enter", "=", display, getResultWhenTryToCalculate(binaryOpSolver, opsHierarchy));