// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let charArray = companyName.split("");
let reversedArray = charArray.reverse();
let reversedString = reversedArray.join("");

console.log(reversedString);
