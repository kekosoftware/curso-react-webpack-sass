import React, { useState, useEffect } from 'react'; //imr

//sfc
const Characters = () => {

  //States
  const [character, setCharacter] = useState([]); //us

  useEffect( () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacter(data.results));
  }, [] )

  // const listItems = character.map((item) =>
  //   <div  key={item.id}>
  //     <img src={item.image} alt={item.name} />
  //     <div className="character">5465
  //       <h3 className="name">{item.name}</h3>
  //       <p className="species">{item.species}</p>
  //       <p className="status">{item.status}</p>
  //     </div>
  //   </div>
  // );
    

  return ( 
    <div className="container">
      <div className="characters">
        { 
          character.map(
            (item) =>
              <div className="box" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="character">
                  <h3 className="name">{item.name}</h3>
                  <p className="species">{item.species}</p>
                  <p className="status">{item.status}</p>
                </div>
              </div>
          ) 
        }
      </div>
    </div>
   );
}
 
export default Characters;