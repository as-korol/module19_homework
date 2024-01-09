function showOwnProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ': ' + obj[key]);
      }
    }
  }
  
  let myObject = {
    name: 'Andrey',
    age: 25,
    job: 'Analitics'
  };
  
  showOwnProperties(myObject);
  