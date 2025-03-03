var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    return color;
}
// Example usage
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
