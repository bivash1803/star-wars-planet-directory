// src/components/ResidentCard.js

import React from 'react';

const ResidentCard = ({ resident }) => {
  return (
    <li>
      <strong>Name:</strong> {resident.name}, <strong>Height:</strong> {resident.height}, <strong>Mass:</strong> {resident.mass}, <strong>Gender:</strong> {resident.gender}
    </li>
  );
};

export default ResidentCard;