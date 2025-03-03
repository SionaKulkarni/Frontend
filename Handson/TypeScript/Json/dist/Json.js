"use strict";
// parseJson.ts
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Syntax error parsing JSON:", error.message);
        }
        else {
            console.error("Error parsing JSON:", error);
        }
        return null;
    }
}
// Test cases
console.log(parseJson('{"name": "Alice", "age": 25}'));
console.log(parseJson('{invalidJson}'));
console.log(parseJson('{"number": 123}'));
