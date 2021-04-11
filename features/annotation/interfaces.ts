interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `${this.name},
    ${this.year},
    ${this.broken}`;
  },
};

const drink1 = {
  color: 'red',
  sugar: 40,
  summary() {
    return this.color;
  },
};

const printSummary = (vehicle: Reportable): void => {
  vehicle.summary();
};

printSummary(oldCivic);
printSummary(drink1);
