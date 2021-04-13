class EventEmitter {
  eventsPool = {};

  on = (eventName, callback) => {
    const eventHandlers = this.eventsPool[eventName] || [];
    eventHandlers.push(callback);
    this.eventsPool[eventName] = eventHandlers;
  };

  off = (eventName, callback) => {
    const eventHandlers = this.eventsPool[eventName];
    if (!eventHandlers) return;
    const index = eventHandlers.findIndex((fn) => {
      return fn === callback;
    });

    if (index > -1) {
      eventHandlers.splie(index, 1);
      this.eventsPool[eventName] = eventHandlers;
    }
  };

  trigger = (eventName) => {
    const eventHandlers = this.eventsPool[eventName];
    if (eventHandlers) {
      eventHandlers.forEach((handler) => {
        handler();
      });
    }
  };
}
