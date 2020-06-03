import HomePage from './template/index1.js'

const main = runApp(MyApp())

function MyApp(){
  console.log('HomePage',HomePage)
   return HomePage
  // return new Div(HomePage,{ id:'app',style:{},className:'test'})
}