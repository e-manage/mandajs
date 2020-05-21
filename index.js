export default function Home(){
  const a = 1
  return Div([
    Span(a.toString()),
    H1(
      Span('123')
    )
  ],{
    onClick:function(_self){
      console.log(_self)
      Observe.fire('test',2)
    }
  })
}