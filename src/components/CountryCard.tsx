import { Country } from '@/types/Country';
import Link from 'next/link';
import Image from 'next/image';

import styles from './CountryCard.module.css';

export default function CountryCard(country: Country) {
  return (
    <Link className={styles.card} href={`/${country.name.common}`}>
      <Image
        src={country.flags.png}
        alt={country.name.common}
        className={styles.cardImg}
        width={500}
        height={300}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.h2}>{country.name.common}</h2>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </Link>
  );
}
