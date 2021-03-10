import React,{Component} from 'react'

class App extends Component {
  state ={ // counter
    AppNumber:0
  }
  add = () => {
    this.setState({
        AppNumber: this.state.AppNumber + 1
      })
    }
    minus = () =>{    
      this.setState({
        AppNumber: this.state.AppNumber - 1
      })
    }
  render(){
    return(
      <div className="App">
      <h1>CurNumber : {this.state.AppNumber}</h1>
      <button onClick={this.add}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
