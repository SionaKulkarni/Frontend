"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lodash.d.ts (or create a new file with this name)
var _ = require("lodash");
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var chunkedArr = _.chunk(arr, 3);
console.log(chunkedArr);
// You can still use other lodash functions as well:
var doubledArr = _.map(arr, function (x) { return x * 2; });
console.log(doubledArr);
