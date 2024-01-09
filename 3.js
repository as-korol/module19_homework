function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
  }
  
  let emptyObject = createEmptyObjectWithoutPrototype();
  console.log(emptyObject);