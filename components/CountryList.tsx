// components/CountryList.tsx
import React from 'react';
import CountryCard from './CountryCard';
import { StyledCountryList } from './StyledComponents';

interface Country {
    name: { common: string };
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: { [code: string]: { name: string } };
    languages: { [code: string]: string };
    flags: { svg: string };
    borders: string[];
}

interface CountryListProps {
    countries: Country[];
    setSelectedCountry: React.Dispatch<Country>
}

const CountryList: React.FC<CountryListProps> = ({ countries, setSelectedCountry }) => {
    return (
        <StyledCountryList>
            {countries.map((country, index) => (
                <CountryCard
                    key={index}
                    country={country}
                    setSelectedCountry={setSelectedCountry}
                />
            ))}
        </StyledCountryList>
    );
};

export default CountryList;
