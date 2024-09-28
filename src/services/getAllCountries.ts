import { Country } from '@/types/Country';
import { sortBy } from 'ramda';

const API_URL = 'https://restcountries.com/v3.1/all';

export default async function getAllCountries(): Promise<Country[]> {
  const res = await fetch(API_URL);
  const data = (await res.json()) as Country[];

  return sortBy((country) => country.name.common, data);
}
