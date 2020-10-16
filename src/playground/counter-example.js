class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: props.count,
    }
  }

  handleAddOne() {
    // setState only updates the state object with the property defined i.e. count in this example.
    // if there was a property of name on state this would not be removed or updated
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0,
}

ReactDOM.render(<Counter count={0} />, document.getElementById('app'))
