function validatePinCodeUC2(pin) {
    const pinRegex = /^[1-9][0-9]{5}$/;  
    console.log(pinRegex.test(pin) ? ` Valid: ${pin}` : ` Invalid: ${pin}`);
}


validatePinCodeUC2("A400088"); 


