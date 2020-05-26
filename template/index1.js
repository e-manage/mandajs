

const Home = function () {
  this.initState({
    name: '',
    age: '',
    pass:false,
    classes:['语文','数学','英语']
  })
 
  return this.render((r)=>{
    const { _Span }= r
    return _Span('${age}')
  })
 
  // return Test('${age}')
}
Home.prototype = new manda()
const HomePage = new Home()

export default HomePage