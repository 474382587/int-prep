class Vehicle {
  // color: string = 'red';
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk');
  }
  startDriving(): void {
    this.honk();
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('chuggaa');
  }
  startDriving(): void {
    this.drive();
    this.honk();
    console.log(this.color)
  }
}

const vehicle = new Vehicle('red');
const car = new Car('red');
car.startDriving();
vehicle.startDriving();
