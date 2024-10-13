import React from 'react';

const DropDown = ({ data, styles, action }) => {
  return (
    <select
      className="custom-select"
      style={styles}
      onChange={action}
    >
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown; 
