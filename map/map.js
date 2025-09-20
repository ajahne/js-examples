const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar"));
// Expected output: "foo"

console.log(map.get("baz"));
// Expected output: undefined


console.log(map.get('hello world'));
map.set('hello world', 'baz');
console.log(map.get('hello world'));

//note - thinking about system design now, so with system design a map could be used to represent an inverted index. For example
const invertedIndex = {
  'word1': ['doc1', 'doc2', 'doc3'],
  'word2': ['doc2', 'doc4']
}
