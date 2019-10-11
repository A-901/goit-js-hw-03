function countProps(obj)  {
  let counters = 0;
  for (let count of Object.keys(obj)) {
    counters += 1;
  }
  return counters;
}



// console.log( "Всего свойств: " + counter );
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3