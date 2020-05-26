/*!
 * manda.js v0.0.1
 * (c) 2020-2020 weizhanzhan
 */

function Doms(state){
  console.log(this,state)
  this._state = state
  this._Span = (child,attr={}) =>{
    return Span(child,attr,state)
  }
}

function runApp(App){
  if(!App) return
  document.body.appendChild(App)
  
}

function manda(){
  this.state = {}
  this.initState = function(state){
    this.state = new Watcher(state).state   
  }

  this.render = function(fn){
    Doms.prototype = this
    const doms = new Doms(this.state)
    const dom = fn(doms)
    return dom
  }
 
  
}


