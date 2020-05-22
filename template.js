new Input({
  value: this.state.age,
  placeholder: '请输入年龄',
  onFoucs: function () {}, //获取到焦点了
  onBlur: function () {}, //失去焦点
  onChange: (e) => {
    this.state.age = e.target.value
  },
})

new H1('HomePage', {
  onClick: function () { //this指向该dom节点，如果换成箭头函数则指向Home
    alert('哎呀，我被点击了')
  }
})

new Div([H1('hello'),Texts('我是文本')])