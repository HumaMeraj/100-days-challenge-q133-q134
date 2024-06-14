//Write a JavaScript object and convert it into a JSON string.
// Defines a JavaScript object
var person = {
    name: "Huma",
    age: 30,
    city: "Islamabad",
};
// Converts the object into a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.
