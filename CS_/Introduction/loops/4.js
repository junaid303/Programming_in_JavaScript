//Print Reverse Pattern of HELLO 
 /*
O
O L
O L L
O L L E
O L L E H */
var str = "HELLO"
var pattern = "";
for (var i=str.length - 1; i>=0; i--){
    console.log(`${pattern}${str[i]}`);
    pattern += `${str[i]} `;
}

// Question 1: Calculate the sum of numbers from 1 to 10 using a for loop.



