import React from 'react';

function GlobalCard({ width, height, imageUrl }) {
  const cardStyle = {
    width: '500px',
    height: `200px`,
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Card" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
}

export default GlobalCard;
 