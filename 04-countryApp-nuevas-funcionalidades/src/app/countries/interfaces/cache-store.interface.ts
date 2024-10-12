import { Country } from "./Country";
import { Region } from "./region.type";


export interface cacheStore{
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries{
  term: string;
  countries: Country[];
}

export interface RegionCountries{
  region: Region;
  countries: Country[]
}
