import React from 'react'

const ChooseSimButton = props => {
  const chooseSim = sim => {
    if (props.part1Active.text !== '' && sim.text === props.part1Active.text) {
      props.setPart1Active({ text: '', value: 0 })
      countPrice(0, null)
      return
    }
    setPart1Active({ text: sim.text, value: sim.value })
    countPrice(0, sim.value)
  }

  return props.list.map((choice, index) => {
    return (
      <div className='col-lg-4 col-12 row justify-content-center' key={index}>
        <button
          className={`col-12  m-4 simu-area ${
            choice.text === arrayToString(part.text) ? 'simu-area-checked' : ''
          }`}
          onClick={() => {
            chooseSim(choice)
          }}
        >
          <input
            className='mb-2 mr-2'
            type='radio'
            name='first-part'
            id={`first-part-${index}`}
            value={choice.text}
            onChange={event => {}}
            checked={choice.text === arrayToString(part.text)}
          />
          <label htmlFor='inlineRadio1'>{choice.text}</label>
        </button>
      </div>
    )
  })
}

export default ChooseSimButton
