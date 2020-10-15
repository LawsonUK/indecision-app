class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three'],
    }
  }

  // for remove all button
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      }
    })
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    alert(option)
  }

  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <ul>
          Options component here
          {this.props.options.map(option => {
            return <Option key={option} option={option} />
          })}
        </ul>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault()
    e.target.elements.option.value.trim() &&
      alert(`Option is ${e.target.elements.option.value}`)
    e.target.elements.option.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
