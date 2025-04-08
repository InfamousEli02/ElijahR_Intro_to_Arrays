let arr = new Array();
let arr2 = ["Hello world", 200, true];

console.log(arr);
console.log(arr2);

console.log(arr[0])

console.log("length of array", arr2.length);

//Sarah's Grocery Store Inventory Exercise
// let groceryList = ["Apples", "Oranges", "Bread", "Milk", "Eggs"];
let groceryList = [];
groceryList[0] = "Apples";
groceryList[1] = "Oranges";
groceryList[2] = "Bread";
groceryList[3] = "Milk";
groceryList[4] = "Eggs";

console.log(groceryList);
console.log(groceryList.length);

groceryList[1] = null;
groceryList[3] = null;

groceryList.length += 2;
console.log(groceryList);

groceryList[5] = "White rice";
groceryList[6] = "Chicken";
console.log(groceryList);
console.log(groceryList.length);

//Sarah's Grocery Store Shopping Cart exercise
shoppingCart = [];

let addGrocery = shoppingCart.push("Bread", "Milk", "Eggs");
console.log(shoppingCart);

let removeGrocery = shoppingCart.pop();

console.log(shoppingCart);
console.log("removed Grocery:", removeGrocery);

//For loop demonstration
let fruits = ["Apples", "Oranges", "Plums"];
for (let index = 0; index < fruits.length; index++ ){
    console.log(`Jose ate ${fruits[index]}`);
}

//Break Down For Loop exercise
let party = ["Leader", "Knight", "Brawler", "Mage", "Healer"];
for (let member = 0; member < party.length; member++){
    console.log(`Initialized value is ${party[member]}`);
    console.log(`condition met`);
    console.log(`After iterator, initialized value is ${party[member]}`);
}