import React,{Component} from 'react'
import data from "./test.json"
import Sub from "./test2"

class App extends Component {
  render(){
    
    return(
      <div className="App">
      <h1>hi</h1>
      {data.map(some =><Sub key={some.id} food={some.food} desc={some.desc}/>)}
      
    </div>
    )
  }
    
}

export default App;
