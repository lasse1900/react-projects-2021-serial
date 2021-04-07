import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hello w')
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-ipsum' onSubmit={handleSubmit}>
        <label htmlFor="amount">
        paragraphs:
        </label>
        <input type="number" name='amout' id='amount' value={count} onChange={(e) => setCount(e.target.value) }/>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit?</p>
      </article>
    </section>
  )
}

export default App;
