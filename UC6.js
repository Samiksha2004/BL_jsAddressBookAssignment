function validateEmailUC2(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.\w+$/;  
    console.log(emailRegex.test(email) ? `Valid: ${email}` : `Invalid: ${email}`);
}

// Test Cases
validateEmailUC2("g@bridgelabz.co");       
validateEmailUC2("xyz@bridgelabz.com");       
validateEmailUC2("abc.xyz@bridgelabz.in");   
