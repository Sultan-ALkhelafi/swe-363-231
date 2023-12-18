// Import the filesystem module 
const fs = require('fs'); 
const path = require('path'); 


  
// Function to get current filenames 
// in directory with specific extension 
// fs.readdir(__dirname, (err, files) => { 
//   if (err) 
//     console.log(err); 
//   else { 
//     console.log("\Filenames with the .txt extension:"); 
//     files.forEach(file => { 

//       if (path.extname(file) == ".txt") 
//         console.log(file); 


//             // Copying the file to a the same name
//             fs.copyFile(file, "New.txt" , (err) => {
//                 if (err) {
//                 console.log("Error Found:", err);
//                 }
//                 else {
            
//                 console.log("\nFile Contents of copied_file:",
//                     fs.readFileSync("New.txt", "utf8"));
//                 }
                
//             });

// })
// }})



fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Filenames with the .txt extension:");
    files.forEach(file => {
        if (path.extname(file) === ".txt") {
            console.log(file);

            // Correcting the file path for source and destination
            const sourceFilePath = path.join(__dirname, file);
            const targetFilePath = path.join(__dirname, 'Copy_of_' + file);

            // Copying the file
            fs.copyFile(sourceFilePath, targetFilePath, err => {
                if (err) {
                    console.log("Error Found:", err);
                } else {
                    // Read the file contents after ensuring the copy is complete
                    fs.readFile(targetFilePath, "utf8", (err, data) => {
                        if (err) {
                            console.log("Error reading file:", err);
                        } else {
                            console.log("\nFile Contents of " + targetFilePath + ":", data);
                        }
                    });
                }
            });
        }
    });
});