import * as _ from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArr = _.chunk(arr, 3);

console.log(chunkedArr);

const doubledArr = _.map(arr, (x) => x * 2);
console.log(doubledArr);