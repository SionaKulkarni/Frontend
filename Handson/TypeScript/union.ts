function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

// Example usage
printDetails("Hello World");
printDetails(100);