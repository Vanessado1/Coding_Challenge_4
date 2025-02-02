// Task 1- If Statements 
let purchaseAmount = 150; // Declared purchase amount 
let discount = 0.15; // Declared discount amount 
let total; // Final amount after discount is applied 
if (purchaseAmount > 100) {
    total = purchaseAmount * discount 
}; // If statement to make sure the discount can be applied to total 
console.log(`Discounted Total: $${total}`); 

// Task 2- For Loop
let sales = [ 350, 189, 26, 12, 86]; //Declared sales array
let totalSales= 0; //Declared total sales 
for (let index = 0; index < sales.length; index++) {
    totalSales += sales[index];
} // For loop used to add all sales together 
console.log(`Total Sales: $${totalSales}`); 

// Task 3- While Loop
let stock = 10; // Declared stock
while (stock > 0) {
    stock--;
    console.log(`Stock Amount: $${stock}`);
} // While loop used to display stock amount getting to zero
 
// Task 4- Do... While Loop
let responses = 0; // Declare responses 
do {
    console.log(`Responses: ${responses}`)
    responses++;
} while (responses <= 3); // Counts responses all the way to 3 

// Task 5- For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}; //Declares employee information array 
for (let key in employee) {
    if (employee.hasOwnProperty(key)) {
        console.log(`${key}: ${employee[key]}`);
    }
}// Shows employee information 

// Task 6- For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"]; //Declared Product array 
for (let product of products) {
    console.log(`Products: ${product}`);
} // Console logs products listed 

// Task 7: forEach()Method
let orders = [101, 102, 103]; // Declared Orders array
orders.forEach(element => {
    console.log(`Orders: ${orders}`)
}); // Console logs each order