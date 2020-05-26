import HomePage from './template/index1.js'

const main = runApp(MyApp())
const globalStyle = {
  width:'100px',
  background:'red',
}
function MyApp(){
   return HomePage
  // return new Div(HomePage,{ id:'app',style:{},className:'test'})
}