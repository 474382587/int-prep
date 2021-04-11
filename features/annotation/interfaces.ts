interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `${this.name},
    ${this.year},
    ${this.broken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
    ${vehicle.name},
    ${vehicle.year},
    ${vehicle.broken}
  `);
};

printVehicle(oldCivic);
