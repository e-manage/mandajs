/*!
 * manda.js v0.0.1
 * (c) 2020-2020 weizhanzhan
 */

function Doms(state){
  this._state = state
  this._Span = (child,attr={}) =>{
    return Span(child,attr,state)
  }
}


class MandaWidgets{
  constructor(state){
    this.state = state
  }

  widgets = {
    Container:(child,attr)=>{
      console.log(456,child,attr,this)
      return new Div(child)
    }
  }
}

function runApp(App){
  console.log(11,App)
  if(!App) return
  document.body.appendChild(App)
  
}

function manda(){
  var a = new Mdoms({})
  this.state = {}
  this.initState = function(state){
    this.state = new Watcher(state).state   
  }

  this.render = function(fn){
    
    const doms = new MandaWidgets(this.state)
    
    const dom = fn(doms)
  
    return dom
  }
 
  
}


