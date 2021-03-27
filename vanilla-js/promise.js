let promise = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((message) => {
    console.log(`This message is inside the then, ${message} `);
  })
  .catch((message) => {
    console.log(`This message is inside the catch, ${message}`);
  });
