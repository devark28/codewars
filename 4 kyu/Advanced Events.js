function Event() {
  let callbacks = [];
  
  // Event.prototype.callbacks = [];
  // Object.defineProperty(Event.prototype, 'callbacks', {
  //   value: [],
  //   enumerable: false,
  // });

  this.subscribe = function(...handlers){
    callbacks = callbacks.concat(handlers);
  }

  this.emit = function(...args){
    for(const handler of callbacks){
      if(typeof handler === 'function'){
        handler.call(this, ...args);
      }
    }
  }

  this.unsubscribe = function(...handlers){
    for(const handler of handlers){
      const index = callbacks.lastIndexOf(handler);
      callbacks = callbacks.filter((_, i) => index !== i);
    }
  }
}
