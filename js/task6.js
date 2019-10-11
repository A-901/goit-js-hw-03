const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
function calculateTotalPrice(arr, productName) {
  let totals = 0;  
  for (let total of arr) {
    if (total.name === productName ) {
    total = total.price*total.quantity;
    totals = total;
    }
  }
  return totals;
}
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
