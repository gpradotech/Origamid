import React from 'react'


const App = () => {
  
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']

  return (
    <ul>
      {filmes.map((filme, index) => 
        <li key={index}>{filme}</li>)
      }
    </ul>
  );
};


export default App
