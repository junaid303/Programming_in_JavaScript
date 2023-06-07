var readlineSync = require("readline-sync");
function base64Encoding (inputStr){
    var inputStr = readlineSync.question("Enter the text which you want to encode : ")
    var inputStr =  inputStr.split("");
    //Step1 : Split the word into ASCII Characters
    console.log(inputStr);
    var asciiChars = [];
    for(var i=0; i<inputStr.length; i++){
        asciiChars.push(inputStr[i].charCodeAt(0));
    }
    //console.log(asciiChars);
    //Step 2: Find the binaries of the above array in 8 bits
    var binariesArray = [];
    for(var i=0; i<asciiChars.length;i++){
        var binary = asciiChars[i].toString(2);
        while(binary.length<8){
            binary = "0" + binary;
        }
        binariesArray.push(binary);
    }
    console.log(binariesArray);
    var binaryMerge = binariesArray.join('');
    console.log(binaryMerge);
    var binaries6Bit = [];
    for(var i =0; i<binaryMerge.length; i=i+6){
        binaries6Bit.push(binaryMerge.slice(i,i+6));
    }
    console.log(binaries6Bit);
    var base64Numbers = [];
    for(var i=0; i<binaries6Bit.length; i++){
        base64Numbers.push(parseInt(binaries6Bit[i],2));
    }
    console.log(base64Numbers);
    var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result = '';
    for(var i=0; i<base64Numbers.length; i++){
        result += base64[base64Numbers[i]];
    }
    console.log(result);

}
base64Encoding();