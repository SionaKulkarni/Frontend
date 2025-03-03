function validateEmail(target: any, propertyKey: string) {
  let value: string;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Object.defineProperty(target, propertyKey, {
    get: function () {
      return value;
    },
    set: function (newValue: string) {
      if (!emailRegex.test(newValue)) {
        throw new Error(`Invalid email format for property '${propertyKey}'.`);
      }
      value = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}

class User {
  @validateEmail
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

// Example usage (valid email):
try {
  const validUser = new User("valid@example.com");
  console.log("Valid user created:", validUser);
} catch (error) {
  console.error("Error creating valid user:", (error as Error).message); // Type assertion
}

// Example usage (invalid email):
try {
  const invalidUser = new User("invalid-email");
  console.log("Invalid user created:", invalidUser);
} catch (error) {
  if (error instanceof Error) { // Type guard
    console.error("Error creating invalid user:", error.message);
  }
}

//Example usage (invalid email 2):
try {
    const invalidUser2 = new User("invalid@email");
    console.log("Invalid user created:", invalidUser2);
} catch (error){
    if (error instanceof Error) {
        console.error("Error creating invalid user 2: ", error.message);
    }
}

//Example usage (invalid email 3):
try {
    const invalidUser3 = new User("invalid@.email.");
    console.log("Invalid user created:", invalidUser3);
} catch (error){
    if (error instanceof Error) {
        console.error("Error creating invalid user 3: ", error.message);
    }
}