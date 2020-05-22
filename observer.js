class Observer {
  _messages = new WeakMap()
  constructor(){
    this._messages = this._messages.set(this,{})
  }
  regist(type,fn){
    if(!type) return
    let messages = this._messages.get(this)
    if(!messages[type]){
      messages[type] = [fn]
    }else{
      messages[type].push(fn)
    }
  }
  notify(type,args){
    let messages = this._messages.get(this)
    if(!messages[type]){
      return
    }else{
      let params = {
        type,
        args
      }
      messages[type].forEach(item => item.call(this, params))  // 循环消息队列 依次执行
    }
  }
  remove(type, fn) {
    let messagess = this._messagess.get(this);
    if(messages[type] instanceof Array){
      var i = messages[type].length - 1;
      for (; i >= 0; i--) {
          messages[type][i] === fn && messagess[type].splice(i, 1) // 删除队列里方法
      }
    }
  }
}
const Observe = new Observer()