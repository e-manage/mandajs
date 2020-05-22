
const Home = function(){
  

  this.initState({
    name:0,
    age:24,
    inputValue:'22'
  })
 

  return new Div([
    new Span(this.state.inputValue,{
      onClick:function(){//this指向该dom节点，如果换成箭头函数则指向Home
       console.log(this)
      }
    }),
    new Input('',{
      value:this.state.inputValue,
      onFoucs:function(){},//获取到焦点了
      onBlur:function(){},//失去焦点
      onChange :(e)=>{
        this.state.inputValue = e.target.value
      },
    })
  ])
}
Home.prototype = new manda()
const HomePage = new Home()

export default HomePage
