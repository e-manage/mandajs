function SelfVue(data,el,exp){
  this.data = data;
  observers(data);
  el.innerHTML = this.data[exp];//初始化模板数据的值
  
  new Watcher(this,exp,function(value){
      el.innerHTML = value;
  });
  return this;
}