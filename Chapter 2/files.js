const fs = require('fs');

// reading files
// readFile() is an assync function
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
    // data comes in ACII code
});

// writing files
// writeFile() is an assync function
// writeFile() overwrites the existing file or creates a new one
fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
    console.log('file was written');
});

// directories
//mkdir() is also an async function
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}