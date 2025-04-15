import { plus } from "./plus";
import { test } from "./minus";
import { friends } from "./plus";
// import {minus} from "./minus";

import multiply from "./multiply";

const x = prompt("Type number");
const y = prompt("Type number");

const result =  plus(x, y);
console.log(result);
console.log(friends);

// const minusResult = minus(x, y);
// console.log(minusResult);
console.log(test);

const multipleResult =  multiply(x, y);
console.log(multipleResult);