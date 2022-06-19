const {boatInventory} = require("./fishingBoat.js")
let fishes = boatInventory()

//  function that buys 10 fish everyday if fish <$10  
///if (any fish amount is <10 caught) {does not buy it}  
// Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
// The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
// The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, a chef can tell the monger that she can only spend $5.00 per fish. The function should then return only fish that cost $5.00 or less.
// Each fish object provided by the fish monger should have a quantity of 10 instead of the original quantity from the fishing boat.

// function to find fish where there are more than 10 and add to the array
const highInventoryFish = (fishArray) => {
    const lotsOfFish = []
for (const fish of fishArray) {
  if (fish.amount >= 10) {
      lotsOfFish.push(fish)
    } 
   }
   return lotsOfFish;   
}



// function to filter any fish.price > $7.50 dont buy
const fishCost = (fishArray) => {
    const Buy = []
    for (const fish of fishArray) {
        if (fish.price <= 7.50) {
             Buy.push(fish)
        }
       }
    return Buy;
}

//function that lets chef set max budget per fish only returning fish <= $5
const chefChoice = (finalFilteredArray,chefNum) => {
    const  finalFilter = []
    if(chefNum <= 7.50) {
       for (const fish of finalFilteredArray) {
           if (fish.price <= chefNum) {finalFilter.push(fish)}
       }
           return finalFilter
       }
         else { return finalFilteredArray}
      }
    
// const chefPreference = (fishArray, chefPrice) => {
//     const filteredFishArray = [];
//     if (chefPrice < 7.5) {
//         for (const fish of fishArray) {
//         if(fish.price <= chefPrice){
//             filteredFishArray.push(fish)}
//     }
//     return filteredFishArray
// }
// else{ return fishArray}
// }
const makeTen = (finalFilter) => {
    for (const fish of finalFilter) {
        fish.amount = 10
    }
    return finalFilter;
} 

const mongerInventory = (chefNum) => {
     let fishQuantity =  highInventoryFish(fishes)
     let fishPrice =  fishCost(fishQuantity)
     let chefAmount =  chefChoice(fishPrice, chefNum)
     let allTen = makeTen(chefAmount)
return allTen
}

let runBuyList = mongerInventory(5);



module.exports = {mongerInventory}