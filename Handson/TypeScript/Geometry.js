var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
// File: main.ts (using the namespace)
/// <reference path="geometry.ts" />
console.log(Geometry.calculateArea(5));
