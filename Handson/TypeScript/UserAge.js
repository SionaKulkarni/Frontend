function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is currently ").concat(isActive ? "active" : "inactive", ".");
}
// Example usage
var age = 30;
var isActive = true;
console.log(getUserInfo(age, isActive));
