// Extract the last four characters from the string below;
let a = "extravagance"
console.log(a[8],a[9],a[10],a[11]);
/*Insert the following string at the fourth index of the below variable:
"eat"
const food = "The quick fox jumped over the lazy dog"*/
const y = "eat"
const food = `The quick fox jumped ${y} the lazy dog`
console.log(food)
/*
Count how many times the following string appears in the string variable:
1. "the"
2."brown"
const story= "The quick brown fox jumps over the lazy dog"
*/
const story ="The  quick fox jumped on the lazy dog"
const quick = (story.match(/the/g)||[]).length;
const fox=(story.match(/brown/g)||[]).length;
console.log(quick);
console.log(fox);



/*
Using JavaScript, find the following words from the following strings:
1. "are"
const string1 = "The pupils are reading in the library";
2. "sitting"
const string2 = "The child was sitting on the table before it fell"
*/
const string1="The pupils are reading in the library";
const library=string1.slice("are");
console.log(library);
const string2="The child was sitting on the table before it fell"
const child=string2.slice("sitting");
console.log(child);



/*
Convert the following strings into the specified format:
1. UpperCase: "wonderful"
2. LowerCase: "amazing", "UndERneath"
3. Title case "A wonderful world"
*/

const z = "wonderful"
const w = z.toUpperCase()
console.log(w)

const d = "amazing"
const e =d.toLowerCase()
console.log(e);

const f = "undERneath"
const g = f.toLowerCase()
console.log(g);

const h = "A wonderful world"
const i = h.toLocaleUpperCase()
console.log(i);