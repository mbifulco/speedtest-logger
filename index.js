const speedTest = require('speedtest-net');
var fs = require('fs');

const outputFileName = 'speedtestresults.csv';
const testFrequencyInSeconds = 60; // run the test every minute

const runSpeedtest = () => {
  const test = speedTest({
    maxTime: 5000,
  });
   
  test.on('data', data => {
    const output = {
      date: new Date(),
      ...data.speeds,
    };
  
    fs.appendFile(
      outputFileName,
      `${new Date()}, ${data.speeds.download}, ${data.speeds.upload} \n`,
      (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      }
    });
    console.dir(output);
  });
   
  test.on('error', err => {
    console.error(err);
  });
};

runSpeedtest(); // run immediately, and then every [interval] after
setInterval(runSpeedtest, testFrequencyInSeconds * 1000);