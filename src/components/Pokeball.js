  const footerTab = document.querySelector('.footer-tab');
  const footer = document.querySelector('.popup-footer');
  const chevron = document.querySelector('.chevron');
  const pokeball = document.querySelector('.pokeball');
  const pokemonCenter = new Audio('pokémon_center.mp3')
  const nostalgia = document.querySelector('.nostalgia')
  let pokemons
  let pokemonCounter = 1;
  let chevronRotation = 0;
  let pokeballRotation = 0;
  let pokemon;

  setInterval(() => {
    pokeballRotation += 0.2;
    pokeball.style.transform = `rotate(${pokeballRotation}deg)`;
  }, 1);

  function unfold() {
    footer.classList.toggle('unfolded');
    chevronRotation += 180;
    chevron.style.transform = `rotate(${chevronRotation}deg)`;
  }

  footerTab.addEventListener('click', unfold);

  nostalgia.addEventListener('click', function() {
    pokemonCenter.play()
  })
