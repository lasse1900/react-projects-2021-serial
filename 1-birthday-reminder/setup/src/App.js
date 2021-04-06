import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data)

  const resetData = () => {
    setPeople(data)
  }

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      {/*<button onClick={() => console.log('you clicked me')}>clear all</button>*/}
      <button onClick={() => setPeople([])}>clear all</button>
      <button onClick={resetData}>reset</button>
    </section>
  </main>
}

export default App;
