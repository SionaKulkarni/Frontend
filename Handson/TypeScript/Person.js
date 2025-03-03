var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ID: ".concat(this.employeeId, ", Name: ").concat(this.name, ", Age: ").concat(this.age);
    };
    return Employee;
}());
// Example usage
var emp = new Employee("John Doe", 28, 101);
console.log(emp.getEmployeeDetails());
