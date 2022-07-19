// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
4
const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
}


 const returnLastTwoDrivers = function() {
    return drivers.slice(2)
 }

console.log(drivers.slice(2))

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(integer) {
    return function(fare = 4) {
        return fare * integer
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}