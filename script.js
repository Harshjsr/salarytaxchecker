// Function to calculate tax and display salary after tax deduction
function calculateTax() {
    let salary = parseFloat(document.getElementById("salary").value);
    let tax, finalSalary;
    let result = document.getElementById("result");

    // Check if salary is valid
    if (isNaN(salary) || salary <= 0) {
        result.innerHTML = "❗️ Please enter a valid salary amount.";
        return;
    }

    // Tax Calculation Based on Salary Slabs
    if (salary < 250000) {
        result.innerHTML = "✅ Your salary is tax-free.";
    } 
    else if (salary >= 250000 && salary <= 500000) {
        tax = salary * 5 / 100;  // 5% tax
        finalSalary = salary - tax;
        result.innerHTML = `💰 Your salary after 5% tax deduction is ₹${finalSalary.toFixed(2)}.`;
    } 
    else if (salary > 500000 && salary <= 1000000) {
        tax = salary * 20 / 100;  // 20% tax
        finalSalary = salary - tax;
        result.innerHTML = `💰 Your salary after 20% tax deduction is ₹${finalSalary.toFixed(2)}.`;
    } 
    else {
        tax = salary * 30 / 100;  // 30% tax
        finalSalary = salary - tax;
        result.innerHTML = `💰 Your salary after 30% tax deduction is ₹${finalSalary.toFixed(2)}.`;
    }
}
