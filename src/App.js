// src/App.js

import React, { useState, useEffect } from 'react';
import { fetchPlanets } from './api/swapi';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await fetchPlanets(currentPage);
      setPlanets(data.results);
    };
    getPlanets();
  }, [currentPage]);

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Star Wars Planets Directory</h1>
      <div className="planets">
        {planets.map(planet => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

export default App;