function validateEmailUC4(email) {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
    console.log(emailRegex.test(email) ? ` Valid: ${email}` : ` Invalid: ${email}`);
}

// Test Cases
validateEmailUC4("abc.xyz@bridgelabz.co.in");  
validateEmailUC4("abc-100@bridgelabz.com");    
validateEmailUC4("abc#xyz@bridgelabz.co.in");  
validateEmailUC4("abc@bridgelabzcom");         
