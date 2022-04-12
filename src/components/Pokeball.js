  // const footerTab = document.querySelector('.footer-tab');
  // const footer = document.querySelector('.popup-footer');
  // const chevron = document.querySelector('.chevron');
  // const pokeball = document.querySelector('.pokeball');
  // const pokemonCenter = new Audio('pokémon_center.mp3')
  // const nostalgia = document.querySelector('.nostalgia')
  // let pokemons
  // let pokemonCounter = 1;
  // let chevronRotation = 0;
  // let pokeballRotation = 0;
  // let pokemon;

  // setInterval(() => {
  //   pokeballRotation += 0.2;
  //   pokeball.style.transform = `rotate(${pokeballRotation}deg)`;
  // }, 1);

  // function unfold() {
  //   footer.classList.toggle('unfolded');
  //   chevronRotation += 180;
  //   chevron.style.transform = `rotate(${chevronRotation}deg)`;
  // }

  // footerTab.addEventListener('click', unfold);

  // nostalgia.addEventListener('click', function() {
  //   pokemonCenter.play()
  // })

import React, { useState, useEffect } from 'react';

function Pokeball() {

  let [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation + 0.05);
    }, 1);
    return () => clearInterval(interval);
  }, );


  return (
    <img src="images/pokeball.svg" class="pokeball" style={{transform: `rotate(${rotation}deg)`}} />
  );

};

export default Pokeball;
