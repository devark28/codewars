import React from 'react';

export const EggList = ({eggs}) => {
  return <ul>{eggs.map((egg, i) => <EasterEgg key={i} name={egg} />)}</ul>
};

export const EasterEgg = ({name}) => {
  return <li>{name}</li>;
};
