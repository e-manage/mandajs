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


// class MandaWidgets{
//   constructor(state){
//     this.state = state
//   }

//   widgets = {
//     Container:(child,attr)=>{
//       console.log(456,child,attr,this)
//       return new Div(child)
//     }
//   }
// }

class RenderDom{
  state = null
  constructor(state){
    this.state = state
  }
  h(){
    console.log('tag', 'staert')
  }
}

function runApp(App){
  console.log(11,App)
  if(!App) return
  document.body.innerHTML = App  
}

function manda(){
  
  this.state = {}
  this.initState = function(state){
    this.state = new Watcher(state).state   
  }

  this.render = function(fn){
    
    // const doms = new MandaWidgets(this.state)
    const doms = new RenderDom(this.state)
    
    const dom = fn(doms)
  
    return dom
  }
 
  
}


