class Employee {
    constructor(id, name, salary, gender, dateOfJoining) {
        try {
            this.validateId(id);
            this.validateSalary(salary);
            this.validateGender(gender);
            this.validateDateOfJoining(dateOfJoining);

            this.id = id;
            this.name = name;
            this.salary = salary;
            this.gender = gender;
            this.dateOfJoining = new Date(dateOfJoining);
            
            console.log("Employee Created Successfully:", this);
        } catch (error) {
            console.error("Error creating employee:", error.message);
        }
    }

    validateId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("Employee ID must be a non-zero positive number.");
        }
    }

    validateSalary(salary) {
        if (typeof salary !== "number" || salary <= 0) {
            throw new Error("Salary must be a non-zero positive number.");
        }
    }

    validateGender(gender) {
        if (!/^[MF]$/.test(gender)) {
            throw new Error("Gender must be 'M' or 'F'.");
        }
    }

    validateDateOfJoining(date) {
        let joiningDate = new Date(date);
        let today = new Date();
        if (isNaN(joiningDate.getTime()) || joiningDate > today) {
            throw new Error("Date of Joining cannot be a future date.");
        }
    }
}

// Example Test Cases
new Employee(101, "John Doe", 50000, "M", "2024-05-20"); 
new Employee(5, "Jane Doe", 30000, "F", "2023-08-15"); 
new Employee(102, "Alice", -25000, "F", "2022-10-10"); 
new Employee(103, "Bob", 40000, "X", "2023-06-01"); 
new Employee(104, "Charlie", 45000, "M", "2030-01-01"); 
