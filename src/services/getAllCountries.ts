const API_URL = 'https://restcountries.com/v3.1/all';

export default async function getAllCountries() {
  const res = await fetch(API_URL);
  return res.json();
}
