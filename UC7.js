function validateEmailUC3(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co(\.\w+)?$/;  
    console.log(emailRegex.test(email) ? ` Valid: ${email}` : ` Invalid: ${email}`);
}

// Test Cases
validateEmailUC3("abc@bridgelabz.co");        
validateEmailUC3("xyz@bridgelabz.co.in");    
validateEmailUC3("abc.xyz@bridgelabz.uk"); 
