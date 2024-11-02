function getValueAtObject(obj, key) {
    if (key in obj) {
      return obj[key];
    } else {
      throw new Error(`"${key}" 존재하지 않는 키입니다.`);
    }
  }
  
  const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
  };
  
  console.log(getValueAtObject(person, 'name')); // 'Alice'
  console.log(getValueAtObject(person, 'age'));  // 25
  console.log(getValueAtObject(person, 'city')); // 'Wonderland'
  console.log(getValueAtObject(person, 'country')); // Error!