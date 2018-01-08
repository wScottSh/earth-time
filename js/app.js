const express = require('express');
const epoch = require('unix-timestamp');
const app = express();

console.log("main.js sanity check");

// const jsonObj = '{
//   "sunrise": "2018-01-07T07:30:29+00:00",
//   "sunset": "2018-01-07T17:17:50+00:00",
//   "solar_noon": "2018-01-07T12:24:10+00:00",
//   "day_length": 35241,
//   "civil_twilight_begin": "2018-01-07T07:02:03+00:00",
//   "civil_twilight_end": "2018-01-07T17:46:16+00:00",
//   "nautical_twilight_begin": "2018-01-07T06:29:56+00:00",
//   "nautical_twilight_end": "2018-01-07T18:18:23+00:00",
//   "astronomical_twilight_begin": "2018-01-07T05:58:39+00:00",
//   "astronomical_twilight_end": "2018-01-07T18:49:41+00:00"
// }'

staticObj = {
  sunrise: "2018-01-07T07:30:29+00:00",
  sunset: "2018-01-07T17:17:50+00:00",
  solar_noon: "2018-01-07T12:24:10+00:00",
  day_length: 35241,
  civil_twilight_begin: "2018-01-07T07:02:03+00:00",
  civil_twilight_end: "2018-01-07T17:46:16+00:00",
  nautical_twilight_begin: "2018-01-07T06:29:56+00:00",
  nautical_twilight_end: "2018-01-07T18:18:23+00:00",
  astronomical_twilight_begin: "2018-01-07T05:58:39+00:00",
  astronomical_twilight_end: "2018-01-07T18:49:41+00:00"
}

const EarthTime = () => { // all stamps in epoch time
  today_start: #, // today_sunrise - yesterday_sunclipse
  today_sunsight: #, // directly
  today_sunclipse: #,
  today_end: #, // tomorrow_sunsight - today_sunclipse
  today_beat_length: #,
  triegon: 'aaa' // converted from lat/lon to aaa resolution
}

console.log(staticObj);

let now = epoch.now()

console.log(now);
console.log(epoch.fromDate(staticObj.sunrise));

let epochObj = {}

const gregToEpoch = (dictionary) => {
  Object.keys(dictionary).forEach(function(key) {
    if (typeof dictionary[key] === 'string') {
      epochObj[key] = epoch.fromDate(dictionary[key])
    } else {
      epochObj[key] = dictionary[key]
    }
  });
}

gregToEpoch(staticObj)

console.log(JSON.stringify(epochObj));
