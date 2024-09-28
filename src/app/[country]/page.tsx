import Image from 'next/image';
import getCountry from '@/services/getCountry';
import type { Country } from '@/types/Country';
import { Metadata } from 'next';
import styles from './page.module.css';
import getAllCountries from '@/services/getAllCountries';

type Props = {
  params: {
    country: string;
  };
};

export async function generateStaticParams() {
  const countries = await getAllCountries();

  return countries.map((country: Country) => ({
    country: country.name.common,
  }));
}

export async function generateMetadata({
  params: { country },
}: Props): Promise<Metadata> {
  const c = await getCountry(country);

  return {
    title: c.name.common,
  };
}

export default async function Country({ params: { country } }: Props) {
  const c = await getCountry(country);

  return (
    <div className={styles.page}>
      <Image
        className={styles.img}
        src={c.flags.png}
        alt={c.name.common}
        width={500}
        height={300}
      />
      <div className={styles.content}>
        <h1>{c.name.common}</h1>
        <p>Population: {c.population.toLocaleString()}</p>
        <p>Region: {c.region}</p>
        <p>Capital: {c.capital}</p>
        <p>Area: {c.area.toLocaleString()} km²</p>
        <p>Timezones: {c.timezones.join(', ')}</p>
        {c.currencies && (
          <p>
            Currencies:{' '}
            {Object.values(c.currencies)
              .map((currency) => currency.name)
              .join(', ')}
          </p>
        )}
        {c.languages && (
          <p>Languages: {Object.values(c.languages).join(', ')}</p>
        )}
        {c.borders && <p>Borders: {c.borders.join(', ')}</p>}
        <p>Continent: {c.continents.join(', ')}</p>
        <p>
          Google Maps: <a href={c.maps.googleMaps}>Link</a>
        </p>
      </div>
    </div>
  );
}
