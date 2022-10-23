const data = [
  {
    name: "Richa Pandey",
    age: 24,
    satus: "single",
  },
];
const studentData = [
  {
    name: "Gullan Pandey",
    age: 24,
    satus: "single",
  },
  {
    name: "Hariom Pandey",
    age: 24,
    satus: "single",
  },
];

// callBack example
function addData(studentData, callback) {
  setTimeout(() => {
    studentData.push(data);
    console.log("data is added successfully!");
    console.log(studentData);
    callback();
  }, 4000);
}

function getData() {
  setTimeout(() => {
    console.log(studentData);
  }, 1000);
}

// Promise example
addData(studentData, getData);
function getName(name) {
  return new Promise((resolve, reject) => {
    if (name.length > 0) {
      resolve("your name is valid!!");
    } else {
      reject("your name is not valid!!");
    }
  });
}

getName("Richa")
  .then((msg) => {
    console.log("your prmise is resolved");
    console.log(msg);
  })
  .catch((err) => {
    console.log("your promise is rejected!");
    console.log(err);
  });
// above callback example solved with promise
function addData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      studentData.push(data);
    }, 4000);
    resolve("Your promise is resolved!!!");
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(studentData);
    }, 4000);
    resolve("Your promise is resolved!!!");
  });
}
addData(data)
  .then((msg) => {
    console.log("your add data function excecuted successfully!");
    getData().then((msg) => {
      console.log("getdata function is called", studentData);
    });
    console.log(msg);
  })
  .catch((err) => {
    console.log("your promise is rejected!");
    console.log(err);
  });
// callback hell

  
 