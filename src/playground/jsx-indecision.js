const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
}

const onFormSubmit = e => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNumber]
  alert(option)
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000]

const render = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}
render()
