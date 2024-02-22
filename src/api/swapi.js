// src/api/swapi.js

const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const fetchPlanets = async (page = 1) => {
  const response = await fetch(`${SWAPI_BASE_URL}/planets/?page=${page}`);
  const data = await response.json();
  return data;
};

export const fetchResidents = async (residentUrls) => {
  const residentRequests = residentUrls.map(url => fetch(url).then(res => res.json()));
  const residents = await Promise.all(residentRequests);
  return residents;
};