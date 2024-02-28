'use client';
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';
 
const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
 
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
 
  const groupByCategory = () => {
    const groupedItems = sortedItems.reduce((acc, item) => {
      acc[item.category] = [...(acc[item.category] || []), item];
      return acc;
    }, {});
    return groupedItems;
  };
 
  const renderItems = () => {
    if (sortBy === 'category') {
      const groupedItems = groupByCategory();
      return Object.entries(groupedItems).map(([category, items]) => (
<div key={category}>
<h2 className="font-bold capitalize">{category}</h2>
<ul>
            {items.map((item, index) => (
<Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
</ul>
</div>
      ));
    } else {
      return (
<ul>
          {sortedItems.map((item, index) => (
<Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
</ul>
      );
    }
  };
 
  return (
<div>
<div>
<button
          onClick={() => setSortBy('name')}
          className={`mr-2 ${sortBy === 'name' ? 'bg-orange-300' : 'bg-orange-100'}`}
>
          Sort by Name
</button>
<button
          onClick={() => setSortBy('category')}
          className={`${sortBy === 'category' ? 'bg-orange-300' : 'bg-orange-100'}`}
>
           Category
</button>
<button onClick={() => setSortBy('group')} className="bg-orange-100 ml-2">
          Group by Category
</button>
</div>
      {renderItems()}
</div>
  );
};
 
export default ItemList;