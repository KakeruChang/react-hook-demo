import React from 'react'

const NecessaryInput = props => {
  const { inputs } = props

  return (
    <div className='card'>
      <h5 className='card-header bg-danger text-light font-weight-bolder text-center'>
        未入力・誤入力・未選択の項目があります。下記項目をご確認ください。
      </h5>
      <div className='card-body row'>
        {inputs.map(input => {
          return (
            <p className='card-text col-md-6 col-12 text-danger' key={input}>
              [ {input}]
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default NecessaryInput
