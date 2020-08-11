

const Home = function () {
  this.initState({
    name: '',
    age: '',
    pass:false,
    classes:['语文','数学','英语']
  })
  function renders(){
    
  }
  return this.render(({state,h})=>{
    
    console.log('r', h,this)
    return 123
  })
 
  // return Test('${age}')
}
Home.prototype = new manda()


export default new Home()