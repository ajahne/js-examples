  console.time();
  const arr = new Array(10000);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Object();
  }
  console.timeEnd();
