const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corola'], ['camaro']];

// Help with inference when extracting values
const carMaker = carMakers[0];
const myCar = carsByMake[0][0];

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-10-10'];
importantDates.push('2020-1-1');
importantDates.push(new Date());
