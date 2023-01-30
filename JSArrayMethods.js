let fruits=["banna","lemoen","apple","mango"];

/*
1. toString() = convert into string data type
2.join()= convert into string data type but Sperate the array elemenet with mentioned characterin the round bracess
*/
console.log(fruits.toString()); //banna,lemoen,apple,mango

console.log(fruits.join("*")); //banna*lemoen*apple*mango

/*pop() = remove the last element of the array and return remove value */
fruits=["banna","lemoen","apple","mango"];

console.log(fruits.pop()); // mango

console.log(fruits); // [ 'banna', 'lemoen', 'apple' ]

/*push() = add new element into array at end of the array and return length of array after adding new element */
fruits =[ 'banna', 'lemoen', 'apple' ];

console.log(fruits.push("kiwi")); // length after adding =4

console.log(fruits); // [ 'banna', 'lemoen', 'apple', 'kiwi' ]

/* shift() = remove the first element of the array and return remove element
and remaning elemenet shift toward lower indexing */

fruits =[ 'banna', 'lemoen', 'apple', 'kiwi' ];

console.log(fruits.shift()); //  removing ele =banna

console.log(fruits); // [ 'lemoen', 'apple', 'kiwi' ]

/* unshift() = add new element in array*/
fruits =[ 'lemoen', 'apple', 'kiwi' ];

console.log(fruits.unshift("mango")); //  length after adding =4

console.log(fruits); // [ 'mango', 'lemoen', 'apple', 'kiwi' ]

/*delete = deleting the element from array just mentioned deleting element indexing number 
and it will return boolean value*/
fruits =[ 'mango', 'lemoen', 'apple', 'kiwi' ];

console.log(delete fruits[2]); //true

console.log(fruits); //[ 'mango', 'lemoen', <1 empty item>, 'kiwi' ]

/*concat() = joining 2 or more arrays*/

let ary1 =[10,20,30,40,78,98,75];
let ary2 = ["asd","poi","qwe"];
let ary3 = ["A","B","C",101];

// joining two array
console.log(ary1.concat(ary2));

// joinig ary2 and ary3 with ary1
console.log(ary1.concat(ary2,ary3));


/*slice(ary indexing number) = return array from mentioned index */

console.log(fruits.slice(1)); // skip mango here and return rest of = [ 'lemoen', <1 empty item>, 'kiwi' ]

/*sort() = sortout ary ele in alpha-betical order*/

console.log(fruits.sort()); //[ 'kiwi', 'lemoen', 'mango', <1 empty item> ]

ary1 =[10,20,30,40,78,98,75];

console.log(ary1.sort());  // [10, 20, 30, 40,75, 78, 98]

/*reverse() = reverse the array */

console.log("Before reverse ary list\n"+fruits); // [ 'kiwi', 'lemoen', 'mango', <1 empty item> ]

console.log("After reverse ary list\n"+fruits.reverse());




