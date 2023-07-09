import React from 'react'
import { Form, Field } from 'react-final-form'

import './Create.css'

const validate = (thing) => {
  console.log(`validate -- What is thing: ${thing}`)
}

const onSubmit = (thing) => {
  console.log(`onSubmit -- What is thing: ${thing}`)
}

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
        <label>Creator</label>
          <Field name='creator' component='input' placeholder='Matt The Mango Man' />
        </div>

        <Field
          name='preparation'
          render={({ input, meta }) => (
            <div>
              <label>Preparation</label>
              <input {...input} placeholder='Butter Fried' />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field
          name='flavor'
          render={({ input, meta }) => (
            <div>
              <label>Flavor</label>
              <input {...input} placeholder='Chocolate' />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field
          name='msrp'
          render={({ input, meta }) => (
            <div>
              <label>MSRP</label>
              <input {...input} type='number' placeholder='999.00'/>
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field
          name='bonus-points'
          render={({ input, meta }) => (
            <div>
              <label>Frequent Mango Bonus Point</label>
              <input {...input} type='number' placeholder='482'/>
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <button type='submit'>Submit</button>
      </form>
    )}
  />
)

export default () => (
  <div className='create'>
    <h1 className='title'>Create Your Own Mango</h1>
    {/* <p style={{marginTop: "3rem", fontSize: "2rem"}}>Under Construction 🚧</p> */}
    <div className='form-container'>
      <MyForm />
    </div>
  </div>
)
