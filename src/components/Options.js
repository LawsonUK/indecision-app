import React from 'react'
import Option from './Option'

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      <ul>
        {props.options.map(optionText => {
          return (
            <Option
              key={optionText}
              optionText={optionText}
              handleDeleteOption={props.handleDeleteOption}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Options
