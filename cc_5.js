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
    displayOrder() {
      console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
  }; //Console log of customer order 
  order.displayOrder();

  //Task 3: Array Manipulation (push, pop, shift, unshift)
  let cartItems = ["Newport", "Kool", "Clipper"]; // Array of items
  cartItems.push("Salem"); // Adding new item
  cartItems.pop(); // Removing last item
  cartItems.unshift("Westport"); // Adding item to beginning
  cartItems.shift(); // removing beginning item
  console.log(cartItems);
  