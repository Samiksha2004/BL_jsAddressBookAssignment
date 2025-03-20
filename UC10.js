const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 10;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

const employeeWageData = [
    { day: 1, hoursWorked: 8 },
    { day: 2, hoursWorked: 4 },
    { day: 3, hoursWorked: 8 },
    { day: 4, hoursWorked: 8 },
    { day: 5, hoursWorked: 0 },
    { day: 6, hoursWorked: 4 },
    { day: 7, hoursWorked: 8 },
    { day: 8, hoursWorked: 8 },
    { day: 9, hoursWorked: 4 },
    { day: 10, hoursWorked: 8 }
];

// Helper function 
const calculateDailyWage = hours => hours * WAGE_PER_HOUR;

// Add wage datac
employeeWageData.forEach(emp => emp.wage = calculateDailyWage(emp.hoursWorked));

// a. Calculate total Wage
const totalWage = employeeWageData.reduce((total, emp) => total + emp.wage, 0);
console.log("Total Wage:", totalWage);

// b. Show the Day along with Daily Wage using Map helper function
const dayWiseWage = employeeWageData.map(emp => `Day ${emp.day}: ₹${emp.wage}`);
console.log("Day Wise Wage:", dayWiseWage);

// c. Show Days when Full time wage of 160 was earned
const fullTimeDays = employeeWageData.filter(emp => emp.wage === FULL_TIME_WAGE).map(emp => emp.day);
console.log("Days with Full Time Wage:", fullTimeDays);

// d. Find the first occurrence when Full Time Wage was earned
const firstFullTimeDay = employeeWageData.find(emp => emp.wage === FULL_TIME_WAGE)?.day;
console.log("First Full Time Wage Earned on Day:", firstFullTimeDay);

// e. Check if Every Element of Full Time Wage is truly holding Full time wage
const isEveryFullTimeCorrect = employeeWageData.filter(emp => emp.hoursWorked === FULL_TIME_HOURS).every(emp => emp.wage === FULL_TIME_WAGE);
console.log("All Full Time Wage Entries Correct:", isEveryFullTimeCorrect);

// f. Check if there is any Part Time Wage
const hasPartTimeWage = employeeWageData.some(emp => emp.hoursWorked === PART_TIME_HOURS);
console.log("Has Part Time Wage:", hasPartTimeWage);

// g. Find the number of days the Employee Worked
const daysWorked = employeeWageData.filter(emp => emp.hoursWorked > 0).length;
console.log("Number of Days Employee Worked:", daysWorked);
