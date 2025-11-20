const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

const imgUrlsPath = path.join(__dirname, '..', 'imgUrls.txt');

console.log('Watching for changes to imgUrls.txt...');

// Function to run the update script
function runUpdateScript() {
  console.log('Running image update script...');
  const updateProcess = spawn('node', ['scripts/updateImages.js'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });

  updateProcess.on('close', (code) => {
    if (code === 0) {
      console.log('Image update script completed successfully.');
    } else {
      console.error(`Image update script exited with code ${code}`);
    }
  });
}

// Run the update script initially
runUpdateScript();

// Watch for changes to the imgUrls.txt file
fs.watchFile(imgUrlsPath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('imgUrls.txt has been modified. Updating image references...');
    runUpdateScript();
  }
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping file watcher...');
  fs.unwatchFile(imgUrlsPath);
  process.exit(0);
});