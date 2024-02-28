'use client';
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = items.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = groupByCategory
    ? Object.entries(
        sortedItems.reduce((acc, item) => {
          const category = item.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        }, {})
      )
    : sortedItems;

  return (
    <div>
      <button
        className={`bg-blue-500 ${sortBy === 'name' ? 'bg-blue-700' : ''} text-white px-4 py-2 mr-2`}
        onClick={() => setSortBy('name')}
      >
        Sort by Name
      </button>
      <button
        className={`bg-blue-500 ${sortBy === 'category' ? 'bg-blue-700' : ''} text-white px-4 py-2`}
        onClick={() => setSortBy('category')}
      >
        Sort by Category
      </button>
      <button
        className={`bg-blue-500 ${groupByCategory ? 'bg-blue-700' : ''} text-white px-4 py-2 ml-2`}
        onClick={() => setGroupByCategory(!groupByCategory)}
      >
        {groupByCategory ? 'Ungroup' : 'Group by Category'}
      </button>
      <ul>
        {groupedItems.map((item, index) =>
          Array.isArray(item) ? (
            <li key={index}>
              <h2 className="text-xl font-bold mb-2">{item[0]}</h2>
              <ul>
                {item[1].map((subItem) => (
                  <Item key={subItem.id} {...subItem} />
                ))}
              </ul>
            </li>
          ) : (
            <Item key={item.id} {...item} />
          )
        )}
      </ul>
    </div>
  );
};

export default ItemList;