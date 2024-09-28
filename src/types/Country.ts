export type Country = {
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  > | null;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string> | null;
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  } | null;
  postalCode: {
    format: string;
    regex: string;
  };
};
