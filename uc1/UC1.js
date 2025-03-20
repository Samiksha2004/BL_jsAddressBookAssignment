class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address);
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhoneNumber(phoneNumber);
        this.email = this.validateEmail(email);
    }

    // Validate Name (First & Last) 
    validateName(name, field) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${field} should start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    // Validate Address, City, and State 
    validateAddress(value, field = "Address") {
        let addressRegex = /^[A-Za-z0-9\s]{4,}$/;
        if (!addressRegex.test(value)) {
            throw new Error(`${field} should have at least 4 characters.`);
        }
        return value;
    }

    // Validate ZIP Code
    validateZip(zip) {
        let zipRegex = /^[1-9][0-9]{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("ZIP Code must be a 6-digit number starting from 1-9.");
        }
        return zip;
    }

    // Validate Phone Number (Format: Country Code Optional, 10 digits)
    validatePhoneNumber(phoneNumber) {
        let phoneRegex = /^[+]?[0-9]{1,3}[- ]?[6-9][0-9]{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error("Phone Number should be a valid 10-digit number, starting from 6-9.");
        }
        return phoneNumber;
    }

    // Validate Email using regex
    validateEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }

    toString() {
        return `Contact { 
            Name: ${this.firstName} ${this.lastName}, 
            Address: ${this.address}, City: ${this.city}, State: ${this.state}, 
            Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email} 
        }`;
    }
}

// Testing the Contact Class
try {
    let contact1 = new Contact("Saniya", "Gupta", "Civil Lines", "Kanpur", "Uttar Pradesh", "208001", "+919876543210", "saniya@example.com");
    console.log(contact1.toString());
} catch (error) {
    console.error(error.message);
}
