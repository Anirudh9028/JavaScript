 /*
 JavaScript object :- really entity contents properties (characteristics)

 
 */

 let person =
 {
    firstname:"john",
    lastname: "nimaj",
    age:45,
    weight :60
 };

 // To Accessing Object Properties there are two way's
 console.log(person.firstname);
 console.log(person["lastname"]);

 // add new proprety to the existing object
 person["height"] = 5.5;
 person.bloodGroup = "+ve";
 
 console.log(person.bloodGroup);
 console.log(person.height);

 // update existing proprety
 //person["weight"] = 65; 
 person.weight =65;
 console.log(person.weight);

 //remove the property from the object
 delete person["age"];
 console.log(person.age);

 // to read the all proprety from the object use for in loop
 
 for(let c in person)  
 {
    //console.log(c); // print only property names
    //console.log(person[c]); // print only proprety value
    console.log(c +" = "+ person[c]); // print both
 }




