import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';

ReactDOM.render(
  <>
  <div className="container">
      <Team 
        teamImgSrc = "https://www.w3schools.com/howto/img_avatar.png"
        teamName = "Bijesh Bhai"
        teamPosition = ".Net Developer"
        teamLink = ""
       />
      <Team 
        teamImgSrc = "https://www.w3schools.com/howto/img_avatar2.png"
        teamName = "Mohsin Bhai"
        teamPosition = "All Rounder Developer"
        teamLink = ""
       />
      <Team 
        teamImgSrc = "https://www.w3schools.com/howto/img_avatar.png"
        teamName = "Hassan Siraj"
        teamPosition = "Front End Developer"
        teamLink = ""
       />
  </div>
  </ >,
  document.getElementById('root')
);