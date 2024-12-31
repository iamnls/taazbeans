import React from 'react';
import PropTypes from 'prop-types'; // For prop validation


function MenuItem({ name, description, price }) {
  // Check if required props are provided
  if (!name || !description || !price) {
    console.error('MenuItem requires name, description, and price props.');
    return null;
  }

  return (
    <div className="menu-item">
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-description">{description}</p>
      <span className="menu-item-price">{price}</span>
    </div>
  );
}

// PropTypes for type checking
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MenuItem;
