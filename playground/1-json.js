const fs = require('fs');

// var book ={
//     title:"Ego is the Enemy",
//     author: "Ryan Holiday"
// };

// //convert to json string
// var bookJsonString = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJsonString);

var dataBuffer = fs.readFileSync('1-json.json');
//convert json string to JSON object
 var bookJsonObj = JSON.parse(dataBuffer.toString());

 //alter the object
 bookJsonObj.name = "Kevin Waki";
 bookJsonObj.age = 29;

 //convert to string and write back to file
 bookJsonString = JSON.stringify(bookJsonObj);
 fs.writeFileSync('1-json.json', bookJsonString);