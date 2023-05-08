import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h2>Error</h2>
        <button className='btn'>
          <Link to='/'>Back to home</Link>
        </button>
      </div>
    </section>
  )
}

export default Error
