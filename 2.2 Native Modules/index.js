const fs = require("fs");

// fs.writeFile("message.txt", "Hello from nodejs", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved");
// } );




// fs.readFile("./message.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// buffer shows so modify so output in coding 

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

