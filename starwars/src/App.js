import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PeopleCard from './components/PeopleCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.




  //Use state here
 const [data, setData] = useState([]);




useEffect (() => {
  axios
  //fetch the data
  .get("https://swapi.co/api/people")
  // print out the response
  .then(response => {
  //  console.log(`this is response `, response);
  //  console.log(`this is data `, response.data);
   console.log(`this is results `, response.data.results);    
   setData(response.data.results);
  })
  //catch the error if any
  .catch(error => {
    console.log(`Oops there is an error`, error);
  })
}, []); // DEPENDANCY ARRAY HERE



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

    {/* loop over array of data here */}
      {data.map((peopleData, index) => {
        // console.log(`this is peopleData `, peopleData);
        return (
         
          <PeopleCard 
          key={index}
          name={peopleData.name}
          gender={peopleData.gender}
          height={peopleData.height}
          eyeColor={peopleData.eye_color}
          mass={peopleData.mass}  
          movieList={peopleData.films} 
                        
          />
        )
      })}
      
    </div>
  );
}

export default App;
