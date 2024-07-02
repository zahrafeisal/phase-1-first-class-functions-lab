// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(drivers);
  }

