const { mongerInventory } = require("./fishMonger.js")
let fishAvailable = mongerInventory()




// write function to iterate through fish 
// para: chefsMax price per fish
// purpose: create array that will list fish under chefMaxPrice 
//
const fishOnMenu = (chefsMaxPrice) => {
const availableFish = []
for (const fish of fishAvailable) {
    if(chefsMaxPrice >= fish.price) {
        availableFish.push(fish)
    }
    return availableFish
}
}


//write function to iterate through ChefMaxPrice array w new array 
// if(fish <=chefMaxPrice ) { push 50% to chefBuy array}
//
const chefBuys = (availableFish) => {
    for (const fish of availableFish) {
               fish.amount = fish.amount * .05     
    }
    return availableFish
}

//function to create meals based on fishAvailable.species bought
//
const makeMenu = (availableInventory) => {
    let menuName = `<h1>Menu</h1>
    <article class="menu">`
    for (const fish of availableInventory) {
          menuName += `<h2>${fish.species}</h2>
           <section class="menu__item">${fish.species} Soup</section>
           <section class="menu__item">${fish.species} Sandwich</section>
           <section class="menu__item">Grilled ${fish.species}</section>`}
       
         menuName += `</article>`
          return menuName }

let fishMenu = (chefsMaxPrice) => {
 let availableFish = fishOnMenu(chefsMaxPrice)
 let bought= chefBuys(availableFish)
 let menuItems = makeMenu(bought)
 return menuItems
}
 const menu = fishMenu(10);
console.log(menu)
/* <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article> */