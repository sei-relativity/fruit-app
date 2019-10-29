import React from 'react';
import ListItem from './ListItem'

const FruitList = props => {
  const items = props.fruits.map(function(item, index) {
    return <ListItem name={item} key={index} />;
  });

  return (
    <ul>
      {items}
    </ul>
  );
};

export default FruitList;