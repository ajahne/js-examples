//will not change the length of the array
const a = [];
console.log(a);             //[]
const b = a.fill(0, 1, 3);
console.log(a);             //[]
console.log(b);             //[]

const c = [1,2,3];
console.log(c.fill(0, 1));  //[1,0,0]

const d = Array(5).fill(0);
console.log(d);             //[0,0,0,0,0]
const e = Array(5);
console.log(e);             //[undefined,undefined,undefined,undefined,undefined];

//scenario:
//what if you have a game board represented by an array and you wanted to
//(re)initialize each value in the array to -1 (basically "reset") the game

var board = [];
var length = 5;
var initialValue = -1;

function initializeBoard(board, length, initialValue) {
  for (var i = 0; i < length; i++) {
    board[i] = initialValue;
  }
}

initializeBoard(board, length, initialValue);
console.log(board);         //[ -1, -1, -1, -1, -1 ]

//new way of doing it
const newBoard = [];
newBoard.length = length;
newBoard.fill(-1);
console.log(newBoard);      //[ -1, -1, -1, -1, -1 ]

//or better yet...
const newBoard2 = Array(length).fill(-1);
console.log(newBoard2);     //[ -1, -1, -1, -1, -1 ]
