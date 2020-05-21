function Div(child, attr={}) {
  return _initElement('div',{child, attr})
}

function Span(child, attr={}) {
  return _initElement('span',{child, attr})
}

function H1(child, attr={}) {
  return _initElement('h1',{child, attr})
}

function H6(child, attr={}) {
  return _initElement('h6',{child, attr})
}

function _initElement(type,{ child , attr }){
  if(!type) throw Error('节点类型错误')
  let dom = document.createElement(type)
  dom = _initAttrs(dom, child,attr)
  return dom
}
function _initAttrs(dom,child, attr) {

  this._self = null
  const {
    id = '',
    className = null,
    style = {},
    onClick
  } = attr
  
  
  _bindDom()
  _bindClass()
  _bindStyle()
  _bindId()
  _bindEvent()

  this._self = dom
  console.log(this)
  return dom

  function _bindEvent(){
    console.log(this)
    onClick && (dom.onclick = onClick.bind(this,this._self))
  }
  function _bindClass(){
    className&&dom.classList.add(className)
  }
  function _bindId(){
    id && (dom.id = id)
  }
  function _getChildType(item){
    if(typeof item === 'string'){//判断是字符串
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
    if(typeof child === 'string'){//判断是字符串
      dom.appendChild(_getChildType(child))
    }else if(child instanceof HTMLElement){//判断是节点
      dom.appendChild(child)
    }else if(child instanceof Array){//判断是数组
      child.forEach(item=>{
        dom.appendChild(_getChildType(item))
      })
    }
  }
}
_initAttrs.prototype = {
  target:null
  
}