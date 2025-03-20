function validatePinCodeUC4(pin) {
    const pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;  
    console.log(pinRegex.test(pin) ? ` Valid: ${pin}` : ` Invalid: ${pin}`);
}

// Test Cases
validatePinCodeUC4("400088");   
validatePinCodeUC4("400 088");  

