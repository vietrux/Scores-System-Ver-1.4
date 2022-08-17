const fs = require("fs");
let array = [];

// số tuần
for (let i = 1; i <= 43; i++) { 
  // số hs trong lớp
  for (let j = 1; j <= 38; j++) { 
    array.push({
      studentId: j,
      week: i,
      point: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }
}
fs.writeFile("file.json", JSON.stringify(array), "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }
  console.log("JSON file has been saved.");
});

