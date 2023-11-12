const fs = require('fs');
const path = require('path');

// Retrieve command-line arguments for source and target directories
const [sourceDir, targetDir] = process.argv.slice(2);

// Check if source and target directories are provided
if (!sourceDir || !targetDir) {
    console.log('Please provide source and target directories.');
    process.exit(1);
}

// Function to copy files
const copyFiles = (source, target) => {
    fs.readdir(source, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Error reading source directory:', err);
            return;
        }

        // Filter specific file types
        const filteredFiles = files.filter(file => 
            file.isFile() && 
            (file.name.endsWith('.txt') || file.name.endsWith('.jpg'))
        );

        // Copy each file
        filteredFiles.forEach(file => {
            const srcPath = path.join(source, file.name);
            const destPath = path.join(target, file.name);

            fs.copyFile(srcPath, destPath, err => {
                if (err) {
                    console.error(`Error copying file ${file.name}:`, err);
                } else {
                    console.log(`Copied ${file.name} to ${target}`);
                }
            });
        });
    });
};

copyFiles(sourceDir, targetDir);

