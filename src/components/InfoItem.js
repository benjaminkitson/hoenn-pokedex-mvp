import React from 'react';
import PokedexContext from '../contexts/pokedex';

function InfoItem(props) {
return (
    <div className="info__item">
      <div className="info__category">{props.category}</div>
      <div className="info__detail"></div>
    </div>
  );
}

export default InfoItem;
