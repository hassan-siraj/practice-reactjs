import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';
import TeamSData from './Sdata';
import './App.css';



//With Map Array
// function teamCards(val){
//   //console.log(val);
//   return(
//     <Team 
//       teamImgSrc = {val.teamImgSrc}
//       teamName = {val.teamName}
//       teamPosition = {val.teamPosition}
//       teamLink = {val.teamLink}
//     />
//   )
// }



ReactDOM.render(
  <>
  <div className="container">
      {
      // With Fat arrow function
      }
      {TeamSData.map((val) => {
        return(
        <Team 
          teamImgSrc = {val.teamImgSrc}
          teamName = {val.teamName}
          teamPosition = {val.teamPosition}
          teamLink = {val.teamLink}
        />
      );
    })}
  </div>
  </ >,
  document.getElementById('root')
);