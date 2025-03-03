namespace Geometry {
    export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
    }
}

// File: main.ts (using the namespace)
/// <reference path="geometry.ts" />

console.log(Geometry.calculateArea(5));