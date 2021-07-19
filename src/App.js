import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person, setPersonList] = useState(data); 
  const clearList = () => {
    console.log('Clicked');
    setPersonList ([])
  }
  return (
    <main>
       <section className="container">
         <h3> {person.length} birthdays today</h3>
         <List people={person}/>
         <button onClick={clearList}>clear all</button>
       </section>
    </main>
  )
}

export default App;
