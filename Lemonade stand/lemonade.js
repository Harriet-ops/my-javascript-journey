let sellingPrice = 1.50;
const costPrice = 0.50;

 
function profit(){

    const SaraProfit= document.getElementById('num').value;

    const SalesProfit = parseFloat(SaraProfit);

    const lemonadeCup = sellingPrice - costPrice;

    let money = SalesProfit * lemonadeCup;

    
   document.getElementById('profit').innerHTML= 'The profit you made today is $' + money.toFixed(3);
}