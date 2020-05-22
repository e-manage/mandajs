/*!
 * manda-dom.js v0.0.1
 * (c) 2020-2020 weizhanzhan
 * 
 * 1.最外层的一个组件先去初始化state数据，通过proxy代理去监听劫持和监听数据的变化
 * 2.Div渲染的时候,根据child中的state的key值，去注册订阅，订阅的时候写好通过订阅的回调，去改变dom
 * 3.proxy在set监听的数据改变的时候，根据通过key值原本注册的订阅 去通知订阅者改变
 */


var prototypes = {
  type:'div',
  dom:null,
  attr:{},
  child:null,
  _initElement,
  _initAttrs,
  _selfChange:function({type,args}){
    this.dom.innerHTML = args 
  }
}

 
function Watcher(state){
  this.state = new Proxy(state, {
    get(target, key) {
      let result = target[key];
      if (key === "age") result += "岁";
      return {
        target,
        key,
        value:result
      };
    },
    set(target, key, value) {
      Observe.fire(key,value)
      return Reflect.set(target, key, value);
    }
  });
}

function manda(){
  this.state = {}
  this.initState = function(state){
    this.state = new Watcher(state).state   
  }
}



function Div(child, attr={}) {
  Observe.regist(child.key,this._selfChange.bind(this))
  this.child = child
  this.attr = attr
  this.dom = this._initElement()
  return this.dom
}
function Span(child, attr={}) {
  Observe.regist(child.key,this._selfChange.bind(this))
  this.type = 'span'
  this.child = child
  this.attr = attr
  this.dom = this._initElement()
  return this.dom
}
function Input(child, attr={}){
  Observe.regist(child.key,this._selfChange.bind(this))
  this.type = 'input'
  this.child = child
  this.attr = attr
  this.dom = this._initElement()
  
  return this.dom
}

function H1(child, attr={}) {
  this.type = 'h1'
  this.child = child
  this.attr = attr
  this.dom = this._initElement()
  
  return this.dom
}

function H6(child, attr={}) {
  this.type = 'h6'
  this.child = child
  this.attr = attr
  this.dom = this._initElement()
  return this.dom
}
Div.prototype = { ...prototypes }
Span.prototype = { ...prototypes }
H1.prototype = { ...prototypes }
H6.prototype = { ...prototypes }
Input.prototype = { ...prototypes }

function _initElement(){
  const { type ,child,attr } = this
  if(!type) throw Error('节点类型错误')
  let dom = document.createElement(type)

  const attrs =  this._initAttrs(dom)
  return attrs
}

function _initAttrs(dom) {
  const { child, attr } =this
  const {
    id = '',
    className = null,
    style = {},
    onClick,
    onFoucs,
    onBlur,
    onChange,
    value
  } = attr
  
  
  _bindDom.apply(this)
  _bindClass.apply(this)
  _bindStyle.apply(this)
  _bindId.apply(this)
  _bindEvent.apply(this)

 
  return dom
  
  function _bindEvent(){
    if(onClick){
      dom.onclick = onClick.bind(this)
    }
    if(onFoucs){
      dom.onfocus = onFoucs.bind(this)
    }
    if(onBlur){
      dom.onblur = onBlur.bind(this)
    }
    if(onChange){
      dom.oninput = onChange.bind(this)
    }
    if(value){//初始化input数据
      dom.value = value.value
    }

  }
  function _bindClass(){
    className&&dom.classList.add(className)
  }
  function _bindId(){
    id && (dom.id = id)
  }
  function _getChildType(item){
    if(typeof item === 'string' || typeof item === 'number'){//判断是字符串
      return document.createTextNode(item);
    }else{ //判断是节点
      return item
    }
  }
  function _bindStyle(){
    Object.keys(style).forEach(key=>{
      dom.style[key] = style[key]
    })
  }
  function _bindDom(){
    if(typeof child === 'string' || typeof child === 'number'){//判断是字符串
      dom.appendChild(_getChildType(child))
    }else if(typeof child === 'object' && child.value !== undefined){
      dom.appendChild(_getChildType(child.value))
    }else if(child instanceof HTMLElement){//判断是节点
      dom.appendChild(child)
    }else if(child instanceof Array){//判断是数组
      child.forEach(item=>{
        dom.appendChild(_getChildType(item))
      })
    }
  }
}

