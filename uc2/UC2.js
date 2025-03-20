class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, min 3 chars
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} should have at least 4 characters.`);
        }
        return value;
    }

    validateZip(zip) {
        let zipRegex = /^[0-9]{6}$/; // 6-digit PIN code validation
        if (!zipRegex.test(zip)) {
            throw new Error("ZIP Code must be exactly 6 digits.");
        }
        return zip;
    }

    validatePhone(phone) {
        let phoneRegex = /^[+]?[0-9]{1,3}?[ ]?[0-9]{10}$/; // Supports +91 9876543210 or 9876543210
        if (!phoneRegex.test(phone)) {
            throw new Error("Invalid phone number. Use format: +91 9876543210 or 9876543210.");
        }
        return phone;
    }

    validateEmail(email) {
        let emailRegex = /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,4})+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }
}

//Valid Contact
try {
    let contact = new Contact("Saniya", "Gupta", "Civil Lines", "Kanpur", "Uttar Pradesh", "208001", "+91 9876543210", "saniya@example.com");
    console.log("Valid Contact Added:", contact);
} catch (error) {
    console.error(error.message);
}

//Invalid Contact (Triggers Errors)
try {
    let invalidContact = new Contact("Sa", "G", "AB", "UP", "Utt", "123", "98765", "saniya@.com");
} catch (error) {
    console.error("Error Adding Contact:", error.message);
}
