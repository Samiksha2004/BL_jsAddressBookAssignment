function validateEmailUC5(email) {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;
    console.log(emailRegex.test(email) ? `Valid: ${email}` : ` Invalid: ${email}`);
}

// Test Cases
validateEmailUC5("abc.xyz@bridgelabz.co.in");  
validateEmailUC5("abc@bridgelabz.co.us");      
validateEmailUC5("abc@bridgelabz.co.uk");       
validateEmailUC5("abc@bridgelabz.com.1a");     
