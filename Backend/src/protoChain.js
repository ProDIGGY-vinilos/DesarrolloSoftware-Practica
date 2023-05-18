const protoChain = (obj) => {
  console.log(JSON.stringify(obj));
  console.log(JSON.stringify(obj.__proto__));
  console.log(
    JSON.stringify(obj.__proto__.__proto__)
  );
  console.log('//////////////');
  console.log(obj);
  console.log(obj.__proto__);
  console.log(obj.__proto__.__proto__);
};

const obj = {
  name: 'John',
  age: 30,
};

protoChain(obj);
