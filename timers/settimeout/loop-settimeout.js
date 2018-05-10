  const createObject = element => {
    element = new Object();
  };

  console.time();
  const arr = new Array(10000);
  for (let i = 0; i < arr.length; i++) {
    setTimeout(createObject, 0, arr[i]);
  }
  console.timeEnd();
