import React from "react";
import './App.css';
import Box from './components/Box'
import "./styles/global.css"


const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }


  onHeartChange = (e) => {
    this.setState({
      heart: e.target.value,
    })
    this.calculateWater()

  }
  onStepsChange = (e) => {
    this.setState({
      steps: e.target.value,
    })
    this.calculateWater()

  }
  onTemperatureChange = (e) => {
    this.setState({
      temperature: e.target.value
    })

    this.calculateWater()
  }

  calculateWater = () => {
    let result = 1.5

    if (this.state.temperature > 20) {
      result += (this.state.temperature - 20) * 0.02
      this.setState({ water: result.toFixed(2) })
    }
    if (this.state.heart > 120) {
      result += (this.state.heart - 120) * 0.0008
      this.setState({ water: result.toFixed(2) })

    }
    if (this.state.steps > 10000) {
      result += (this.state.steps - 10000) * 0.00002
      this.setState({ water: result.toFixed(2) })
    }

  }

  render() {

    return (
      <div className="container-fluid  bg-info" >
        <div className="row">
          {/* <p>heart :{heartMin}</p>
          <p>Temperature :{tempMin}</p>
          <p>Steps :{stepsMin}</p> */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          <Box icon="directions_walk" color="black" unit="steps" min={stepsMin} max={stepsMax} value={this.state.steps} onChange={this.onStepsChange} />
          <Box icon="favorite" color="red" unit="bpm" min={heartMin} max={heartMax} value={this.state.heart} onChange={this.onHeartChange} />
          <Box icon="wb_sunny" color="yellow" unit="°C" value={this.state.temperature} min={tempMin} max={tempMax} onChange={this.onTemperatureChange} />


        </div>
      </div>

    );
  }
}

export default App;