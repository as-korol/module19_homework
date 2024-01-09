function checkProperty(str, obj) {
    return obj.hasOwnProperty(str);
  }
  
  let myObject = {
    name: 'Andrey',
    age: 25,
    job: 'Analitics'
  };
  
  let result1 = checkProperty('name', myObject); 
  let result2 = checkProperty('email', myObject); 
  
  console.log(result1); // true
  console.log(result2); // false
  