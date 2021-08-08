const testObj = [
    {"id":0,"obsazeno":true,"datum": 1628438419},
    {"id":1,"obsazeno":true,"datum": 1628438419},
    {"id":2,"obsazeno":true,"datum": 1628438419},
    {"id":3,"obsazeno":true,"datum": 1628438419},
    {"id":4,"obsazeno":true,"datum": 1628438419},
    {"id":5,"obsazeno":true,"datum": 1628438419},
    {"id":6,"obsazeno":true,"datum": 1628438419},
    {"id":7,"obsazeno":true,"datum": 1628438419},
    {"id":8,"obsazeno":true,"datum": 1628438419},
    {"id":9,"obsazeno":true,"datum": 1628438419},
    {"id":10,"obsazeno":true,"datum": 1628438419},
    {"id":11,"obsazeno":true,"datum": 1628438419},
    {"id":12,"obsazeno":true,"datum": 1628438419},
    {"id":13,"obsazeno":true,"datum": 1628438419},
    {"id":14,"obsazeno":true,"datum": 1628438419},
    {"id":15,"obsazeno":true,"datum": 1628438419},
    {"id":16,"obsazeno":true,"datum": 1628438419},
    {"id":17,"obsazeno":true,"datum": 1628438419},
    {"id":18,"obsazeno":true,"datum": 1628438419},
    {"id":19,"obsazeno":true,"datum": 1628438419},
    {"id":20,"obsazeno":true,"datum": 1628438419},
    {"id":21,"obsazeno":true,"datum": 1628438419},
    {"id":22,"obsazeno":true,"datum": 1628438419},
    {"id":23,"obsazeno":true,"datum": 1628438419},
    {"id":24,"obsazeno":true,"datum": 1628438419},
    {"id":25,"obsazeno":true,"datum": 1628438419},
    {"id":26,"obsazeno":true,"datum": 1628438419},
    {"id":27,"obsazeno":true,"datum": 1628438419},
    {"id":28,"obsazeno":true,"datum": 1628438419},
    {"id":29,"obsazeno":true,"datum": 1628438419},
    {"id":30,"obsazeno":true,"datum": 1628438419},
    {"id":31,"obsazeno":true,"datum": 1628438419}
]

const parkingTime = [];


testObj.filter((item) => item.obsazeno)
        .sort((a, b ) =>  a.datum - b.datum)
        .slice(0,5)
        .forEach(item => {
            const parkingTimeObject = {};
            const datumNow = Math.floor(new Date(new Date().toLocaleString('en-US', {timeZone: "Europe/Prague"})).getTime()/1000);
            const curTime = datumNow - item.datum;
            
            parkingTimeObject["id"] = item.id;
            parkingTimeObject["hours"] = Math.floor(curTime/3600);
            parkingTimeObject["minutes"] = Math.floor(curTime/60)%60;
            parkingTimeObject["seconds"] = curTime%60;
            parkingTime.push(parkingTimeObject);
        })

console.log(parkingTime);

// const datumNow = new Date().toLocaleString('en-US', {timeZone: "Europe/Prague"});
// const datum = new Date('Sat Aug  7 16:00:54 2021').toLocaleString('en-US');
// const diff = Math.floor((new Date(datumNow).getTime() - new Date(datum).getTime())/1000);
// const sec = diff%60
// const min = Math.floor((diff/60))%60;
// const hour = Math.floor((diff/3600));
// console.log(hour + ':' + min + ':' + sec);
// console.log(diff/1000);
