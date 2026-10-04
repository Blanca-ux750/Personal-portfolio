function calculateOrder() /* Order calculation*/
{
   // I used .value to get the quantity entered by the user.//

    let birriaQuantity = document.getElementById("birria").value;
    let moleQuantity = document.getElementById("mole").value;
    let shrimpQuantity = document.getElementById("shrimp").value;
    let pozoleQuantity = document.getElementById("pozole").value;
    let chilaquilesQuantity = document.getElementById("chilaquiles").value;
    let tamalesQuantity = document.getElementById("tamales").value;

    // performs calculations automatically based on the quantities selected by the user.//
    let birriaTotal = birriaQuantity * 22.99;
    let moleTotal = moleQuantity * 24.99;
    let shrimpTotal = shrimpQuantity * 22.99;
    let pozoleTotal = pozoleQuantity * 16.99;
    let chilaquilesTotal = chilaquilesQuantity * 15.99;
    let tamalesTotal = tamalesQuantity * 14.99;

    //variables to store://

    let subtotal = birriaTotal + moleTotal + shrimpTotal + pozoleTotal + chilaquilesTotal + tamalesTotal;
    let tax = subtotal * 0.13;
    let total = subtotal + tax;

    // Inner properity to display dynamic results on the web page.

    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal.toFixed(2); 
    document.getElementById("tax").innerHTML = "Tax 13%: $" + tax.toFixed(2);
    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
}
/* function order to calculate the order and display confirmation messages*/
function placeOrder() {
    document.getElementById("orderMsg").innerHTML =
    "Thank you! Your order has been placed successfully.";
}
