import React from 'react';
import { Card, Flag, Info } from './styles';
import { Data } from '../general/styles'


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

interface CountryCardProps {
    country: Country;
    setSelectedCountry: React.Dispatch<Country>;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, setSelectedCountry }) => {
    const handleCardClick = () => {
        setSelectedCountry(country);
    };

    return (
        <Card onClick={handleCardClick}>
            <Flag src={country.flags.svg} alt={`${country.name.common} Flag`} />
            <Info>
                <h3>{country.name.common}</h3>
                <Data>Population: {country.population.toLocaleString('en-US')}</Data>
                <Data>Region: {country.region}</Data>
                <Data>Capital: {country.capital}</Data>
            </Info>
        </Card>
    );
};

export default CountryCard;
