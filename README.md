# What is this?
`speedtest-logger` uses speedtest.net's CLI to run speedtests from a host machine regularly, logging them to a CSV.  This was created initially to keep a log of bad internet speeds at my home, to provide as evidence to my ISP.

## To run:
1. clone this repo
1. install `pm2` on your OS with `npm install pm2 -g` or `yarn global add pm2`.  This will daemonize this program, and keep it running in the background of your OS
1. install with `npm install` or `yarn install`
1. run with `pm2 start index.js`.  This will keep the tracker running in the background

## To configure
In [`index.js`](/index.js), there are a few constants defined:
  - `outputFileName` is where your test results will be outputted (as a .csv file)
  - `testFrequencyInSeconds` is how often this test is ran, in seconds.

## Ouput
The csv file contains 3 fields in each row:
- the date and time this test was completed
- download speed
- upload speed