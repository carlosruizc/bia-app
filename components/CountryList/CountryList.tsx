import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { CountryListComponent } from './styles';

interface Country {
    name: {
        common: string;
        nativeName: {
            [code: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string[];
    currencies: { [code: string]: { name: string } };
    languages: { [code: string]: string };
    flags: { svg: string };
    borders: string[];
    cca3: string;
}

interface CountryListProps {
    countries: Country[];
    setSelectedCountry: React.Dispatch<Country>
}

const CountryList: React.FC<CountryListProps> = ({ countries, setSelectedCountry }) => {
    return (
        <CountryListComponent>
            {countries.map((country, index) => (
                <CountryCard
                    key={index}
                    country={country}
                    setSelectedCountry={setSelectedCountry}
                />
            ))}
        </CountryListComponent>
    );
};

export default CountryList;
