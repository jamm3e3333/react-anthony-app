const generateData = (parkingOld, parkingActual) => {

    if(!parkingActual.length && !parkingOld.length) {
        return [];
    }
    else if(!parkingActual.length){
        return parkingOld
    }

    const upToDateLots = [...parkingOld]; //old data

    parkingActual.forEach((lot) => {
        const index = upToDateLots.findIndex(oldLot => oldLot.id === lot.id);
        if(index !== -1) {
            upToDateLots[index] = lot;
        }
        else{
            upToDateLots.push(lot);
        } 
    });
    return upToDateLots;
}

module.exports = generateData;