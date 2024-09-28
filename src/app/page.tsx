import getAllCountries from '@/services/getAllCountries';
import styles from './page.module.css';
import { Country } from '@/types/Country';
import CountryCard from '@/components/CountryCard';

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <div className={styles.page}>
      {countries.map((country: Country) => (
        <CountryCard key={country.cca3} {...country} />
      ))}
    </div>
  );
}
