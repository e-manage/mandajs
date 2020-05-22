import HomePage from './index.js'

const main = runApp(MyApp())
const globalStyle = {
  width:'100px',
  background:'red',
}
function MyApp(){
  //  return new Div('dd')
  return new Div(HomePage,{ id:'app',style:{},className:'test'})
}