// src/components/PlanetCard.js

import React, { useState, useEffect } from 'react';
import { fetchResidents } from '../api/swapi';
import ResidentCard from './ResidentCard';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const getResidents = async () => {
      const fetchedResidents = await fetchResidents(planet.residents);
      setResidents(fetchedResidents);
    };
    getResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <h3>Residents:</h3>
      <ul>
        {residents.map(resident => (
          <ResidentCard key={resident.name} resident={resident} />
        ))}
      </ul>
    </div>
  );
};

export default PlanetCard;
