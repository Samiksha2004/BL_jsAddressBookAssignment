
function validatePinCode(pin) {
    const pinRegex = /^[1-9][0-9]{5}$/;  // PIN Code Pattern
    if (pinRegex.test(pin)) {
        console.log(` ${pin} is a valid PIN Code.`);
    } else {
        console.log(` ${pin} is NOT a valid PIN Code.`);
    }
}

// Test Cases
validatePinCode("400088");  
validatePinCode("000088"); 
 

