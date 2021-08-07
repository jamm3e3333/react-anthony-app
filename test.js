const datumNow = new Date().toLocaleString('en-US', {timeZone: "Europe/Prague"});
const datum = new Date('Sat Aug  7 16:00:54 2021').toLocaleString('en-US');
const diff = new Date(datumNow).getTime() - new Date(datum).getTime();
const sec = diff%60
console.log(sec);
console.log(diff/1000);
