// arrays
let customerNames = [
    "John Smith",
    "Bill Williams",
    "Sofia Rivera",
    "Amir Y.",
    "Luis Garcia",
    "Vadim K."


];
let meals = [
    "Birria Tacos",
    "Enchiladas de Mole",
    "Fish Tacos",
    "Pozole",
    "Chilaquiles",
    "Tamales"
];

let eatInPrices = [
    21.99,
    23.99,
    21.99,
    21.99,
    19.99,
    13.99
];

let takeAwayPrices = [
    22.99,
    24.99,
    22.99,
    22.99,
    20.99,
    14.99
];

let orderTypes = [
    "Eat-In",
    "Take-Away",
    "Eat-In",
    "Take-Away",
    "Eat-In",
    "Take-Away"
];

let orderDays = [
    3,
    7,
    12,
    18,
    23,
    29
];

/* Loop */

for (let i = 0; i < customerNames.length; i++) {

    let orderInfo = "";

    orderInfo += customerNames[i] + "<br>";

    orderInfo += meals[i] + "<br>";

    if (orderTypes[i] === "Eat-In") {

        orderInfo += "$" + eatInPrices[i] + "<br>";

    } else {

        orderInfo += "$" + takeAwayPrices[i] + "<br>";

    }

    orderInfo += orderTypes[i];

    document.getElementById("day" + orderDays[i]).innerHTML +=
    "<div class='order-info'>" + orderInfo + "</div>";
  
}