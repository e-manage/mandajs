 
function Watcher(state){
    this.state = new Proxy(state, {
      get(target, key) {
        let result = target[key];
        return {
          target,
          key,
          value:result
        };
      },
      set(target, key, value) {
        Observe.notify(key,value)
        return Reflect.set(target, key, value);
      }
    });
  }
  