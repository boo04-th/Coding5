//Task 1: Object Profile
//Declaring an object customer
const customer = { 
    name:"John Doe",
    age: 35,
    email:"john.doe@email.com"
};
console.log(`Name: ${customer.name}`); //Logging name of customer
console.log(`Age: ${customer.age}`); // Logging age of customer
console.log(`Email: ${customer.email}`); //logging email of customer

//Task 2: Object Methods
//Declaring an object order
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
      console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
  }; //Console log of customer order 
  order.displayOrder();

//Task 3: Array Manipulation (push, pop, shift, unshift)
let cartItems = ["Newport", "Kool", "Clipper"]; // Array of items
  cartItems.push("Salem"); // Adding new item
  cartItems.pop(); // Removing last item
  cartItems.unshift("Westport"); // Adding item to beginning
  cartItems.shift(); // Removing beginning item
  console.log("Final list of the Cart Items:",cartItems);
  
//Task 4: Map Method
const prices = [100, 200, 300]; // Arraying of prices
const discountedPrices = prices.map(price => price * 0.9); //10% discount
console.log("Discounted Prices:", discountedPrices);

//Task 5: Filter Method
const inventory = [5, 0, 12, 8, 0];
const availableProducts = inventory.filter(quantity => quantity > 0); // Using the .filter() method
console.log(availableProducts);


