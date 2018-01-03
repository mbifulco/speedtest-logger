# Speedtesterizer

## To run:
- clone this repo
- install `pm2` on your OS with `npm install pm2 -g` or `yarn global add pm2`.  This will daemonize this program, and keep it running in the background of your OS
- install with `npm install` or `yarn install`
- run with `pm2 start index.js`.  This will keep the tracker running in the background

## To configure
In [`index.js`](/index.js), there are a few constants defined:
  - `outputFileName` is where your test results will be outputted (as a .csv file)
  - `testFrequencyInSeconds` is how often this test is ran, in seconds.

## Ouput
The csv file contains 3 fields in each row:
- the date and time this test was completed
- download speed
- upload speed