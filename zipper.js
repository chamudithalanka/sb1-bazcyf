const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Compression level
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Zip file has been created.');
});

archive.pipe(output);

// Append files from the current directory
archive.directory('.', false);

archive.finalize();