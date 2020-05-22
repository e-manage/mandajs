

const Child = function(state){

  return new Div([
    new H1('我是子组件'),
    new Texts('我的名字是：'),new Texts(state.name),
    new Texts('我的年纪是：'),new Texts(state.age)])
}

const Home = function () {
  this.initState({
    name: '',
    age: '',
    pass:false,
    classes:['语文','数学','英语']
  })
 
  const length = this.state.classes.value.length
  return new Div([
    new H1('HomePage'),
    new Div([new Texts('姓名'), new Input({
      value: this.state.name,
      placeholder: '请输入姓名',
      onFoucs: function () {}, //获取到焦点了
      onBlur: function () {}, //失去焦点
      onChange: (e) => {
        this.state.name = e.target.value
      },
    })]),
    new Div([new Texts('年龄'), new Input({
      value: this.state.age,
      placeholder: '请输入年龄',
      onFoucs: function () {}, //获取到焦点了
      onBlur: function () {}, //失去焦点
      onChange: (e) => {
        this.state.age = e.target.value
      },
    })]),
    new Div([
      new Texts('科目共有'),new Texts(length),new Texts('课:'),
      ...this.state.classes.value.map((item,index)=>H6(this.state.classes.value[index]))
    ]),
   
    Child(this.state)
  ])
}
Home.prototype = new manda()
const HomePage = new Home()

export default HomePage