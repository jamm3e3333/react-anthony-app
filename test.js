const datumNow = new Date().toLocaleString('en-US', {timeZone: "Europe/Prague"});
const datum = new Date('Sat Aug  7 16:00:54 2021').toLocaleString('en-US');
const diff = Math.floor((new Date(datumNow).getTime() - new Date(datum).getTime())/1000);
const sec = diff%60
const min = Math.floor((diff/60))%60;
const hour = Math.floor((diff/3600));
console.log(hour + ':' + min + ':' + sec);
// console.log(diff/1000);
