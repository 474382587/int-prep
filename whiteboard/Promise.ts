enum Status {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}
class Promiss {
  status: Status;
  value: any;
  reason: any;
  onFulfilled = [];
  onRejected = [];
  constructor(private executor) {
    this.status = Status.pending;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value: any) => {
      console.log('resolved!!!!');
      if (this.status === Status.pending) {
        this.status = Status.fulfilled;
        this.value = value;
        this.onFulfilled.forEach((fulfilledHandlers) => {
          console.log('fulfilled!!!!');
          fulfilledHandlers(this.value);
        });
      }
    };

    const reject = (reason) => {
      if (this.status === Status.pending) {
        this.reason = reason;
        this.status = Status.rejected;
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then = (onFulfilled, onRejected) => {
    if (this.status === Status.pending) {
      this.onFulfilled.push(onFulfilled);
      this.onRejected.push(onRejected);
    }
    if (this.status === Status.fulfilled) {
      this.onFulfilled.push(onFulfilled);
    }
    if (this.status === Status.rejected) {
      this.onRejected.push(onRejected);
    }
  };
}
