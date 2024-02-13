'use client';
import React, { useState } from 'react';
 
export default function NewItem() {
  const [formData, setFormData] = useState({
    name: '',
    quantity: 1,
    category: 'produce'
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(`Name: ${formData.name}, Quantity: ${formData.quantity}, Category: ${formData.category}`);
    setFormData({
      name: '',
      quantity: 1,
      category: 'produce'
    });
  };
 
  return (
    <div className="bg-black p-6 rounded-lg max-w-sm mx-auto mt-8">
<form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label htmlFor="name" className="block text-white">ItemName</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input mt-1 block w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-white">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-input mt-1 block w-full"
            min="1"
            max="99"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-white">Category</label>
          <select
            id="category"
            name="category"
            className="form-select mt-1 block w-full"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-20 py-4 rounded"> +</button>
      </form>
    </div>
  );
}
 
