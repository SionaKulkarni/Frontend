function identity<T>(value: T): T {
    return value;
}

// Example usage
console.log(identity<string>("Hello"));
console.log(identity<number>(42));