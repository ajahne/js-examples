const numElements = 10000;
let count = 0;
let intervalID;

const createObject = element => {
    if (count !== numElements-1) {
        element = new Object();
        count++;
    }
    else {
        clearInterval(intervalID);
        console.timeEnd();
    }

};

console.time();
const arr = new Array(numElements);
intervalID = setInterval(createObject, 0, arr[count]);