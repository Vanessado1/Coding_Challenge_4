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
 