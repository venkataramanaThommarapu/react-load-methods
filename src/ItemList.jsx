
import React, { useState } from 'react';
import items from './Items';

const ItemList = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredItems = categoryFilter === 'all' ? items : items.filter((item) => item.category === categoryFilter);

  const sortedItems = [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <div>
      <h2>Item List</h2>
      <div>
        Filter by category:{' '}
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="all">All</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul className='l-style'>
        {sortedItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
