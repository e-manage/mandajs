/*!
 * manda.js v0.0.1
 * (c) 2020-2020 weizhanzhan
 */



function runApp(App){
  if(!App) return
  document.body.appendChild(App)
  
}

function manda(){
  this.state = {}
  this.initState = function(state){
      this.state = new Watcher(state).state   
  }
}
  

