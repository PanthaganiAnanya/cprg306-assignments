import React from 'react';
 
const Item = ({ name, quantity, category }) => {
  return (
<li className="p-2 border-b border-gray-200">
<strong>{name}</strong><br/>
      Buy {quantity} in {category}
</li>
  );
};
 
export default Item;
