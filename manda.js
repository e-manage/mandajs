/*!
 * manda.js v0.0.1
 * (c) 2020-2020 weizhanzhan
 */



function runApp(App){
  // Observe.regist('test',function(val){
  //   console.log(val.args)
  //   App.innerHTML = val.args
  //   document.body.replaceChild(App,App)
  // })

  document.body.appendChild(App)
  
}

function Manda(){

}

class Observer {
   _message = {}

  regist(type, fn) {
      if (typeof this._message[type] === 'undefined') {
          this._message[type] = [fn]
      } else {
          this._message[type].push(fn)
      }
  }

   fire(type, args) {
      if (!this._message[type]) return
      const event = {
          type,
          args: args || {}
      }
      let i = 0
      const l = this._message[type].length
      for (;i < l; i++) {
          this._message[type][i].call(this, event)
      }
  }

   remove(type, fn) {
      if (this._message[type] instanceof Array) {
          let i = this._message[type].length - 1
          for (i; i >= 0; i--) {
              this._message[type][i] === fn && this._message[type].splice(i, 1)
          }
          if (!this._message[type].length) {
              delete this._message[type]
          }
      }
  }
}
const Observe = new Observer()