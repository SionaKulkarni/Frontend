function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString); // Attempt to parse the JSON string
    }
    catch (error) {
        console.error("Error parsing JSON:", error);
        return null; // Return null on failure
    }
}
// Test cases
console.log(parseJson('{"name": "Alice", "age": 25}')); // Valid JSON => { name: "Alice", age: 25 }
console.log(parseJson('{invalidJson}')); // Invalid JSON => Logs error & returns null
