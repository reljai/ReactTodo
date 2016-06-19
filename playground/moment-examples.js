var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('current timestamp ' + now.unix());

var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);
console.log('current moment ' + currentMoment.format("MMMM Do, YYYY @ H:mm A"));