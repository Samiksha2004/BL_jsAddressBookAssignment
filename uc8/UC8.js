class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        const addressPattern = /^[A-Za-z0-9\s]{4,}$/;
        const zipPattern = /^[0-9]{6}$/;
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;

        if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
            throw new Error("First Name and Last Name should start with a capital letter and have at least 3 characters.");
        }
        if (!addressPattern.test(address) || !addressPattern.test(city) || !addressPattern.test(state)) {
            throw new Error("Address, City, and State should have at least 4 characters.");
        }
        if (!zipPattern.test(zip)) {
            throw new Error("Invalid Zip Code. It should be a 6-digit number.");
        }
        if (!phonePattern.test(phone)) {
            throw new Error("Invalid Phone Number. It should be a 10-digit number.");
        }
        if (!emailPattern.test(email)) {
            throw new Error("Invalid Email Address.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}


let addressBook = [
    new Contact("Saniya", "Gupta", "123 Main St", "Mumbai", "Maharashtra", "400001", "9876543210", "john.doe@example.com"),
    new Contact("Samiksha", "Jadon", "456 Elm St", "Pune", "Maharashtra", "411001", "9123456789", "alice.smith@example.com"),
    new Contact("Shivangi", "Bharadwaj", "789 Oak St", "Delhi", "Delhi", "110001", "9112233445", "bob.johnson@example.com"),
    new Contact("Jiya", "Gupta", "321 Pine St", "Mumbai", "Maharashtra", "400002", "9087654321", "charlie.brown@example.com")
];


function searchByCity(city) {
    let result = addressBook.filter(contact => contact.city === city);
    return result.length > 0 ? result : `No contacts found in ${city}`;
}


function searchByState(state) {
    let result = addressBook.filter(contact => contact.state === state);
    return result.length > 0 ? result : `No contacts found in ${state}`;
}


console.log("Contacts in Mumbai:", searchByCity("Mumbai"));
console.log("Contacts in Maharashtra:", searchByState("Maharashtra"));
console.log("Contacts in Bangalore:", searchByCity("Bangalore")); // Should return no contacts
