import React from 'react';
import { BordersComponent, CountryData, CountryDetails, CountryName, DetailedData, FlagBig, TextBlock } from './styles';
import { ButtonComponent, Data, Button } from '../general/styles';
import { MdArrowBack } from 'react-icons/md';
import BorderingButtons from '../BorderingButtons/BorderingButtons';

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

interface DetailsProps {
    countries: Country[];
    selectedCountryState: [Country, React.Dispatch<Country>];
    onBackClick: () => void;
}

const Details: React.FC<DetailsProps> = ({ selectedCountryState, onBackClick, countries }) => {
    const [selectedCountry, setSelectedCountry] = selectedCountryState;
    const { languages, borders } = selectedCountry;
    const languageCodes = languages ? Object.keys(languages) : "";
    const languageNames = languageCodes !== "" ? languageCodes.map(code => languages[code]) : "";
    const languageNamesString = languageNames !== "" ? languageNames.join(', ') : "";

    const borderingCountries = borders ? borders.map(borderCode => {
        const matchingCountry = countries.find(country => country.cca3 === borderCode);
        return matchingCountry ? matchingCountry : '';
    }) : [];
    const filteredBorderingCountries = borderingCountries.filter(name => name !== '');

    return (
        <>
            <ButtonComponent className='back-button'>
                <div className='back-button'>
                    <Button
                        onClick={onBackClick}
                        className="back-content">
                        <MdArrowBack />
                        Back
                    </Button>
                </div>
            </ButtonComponent>
            <CountryDetails>
                <FlagBig src={selectedCountry.flags.svg} alt={`${selectedCountry.name.common} Flag`} />
                <TextBlock>
                    <h2>{selectedCountry.name.common}</h2>
                    <CountryData>
                        <DetailedData>
                            <Data><strong> Native Name: </strong>{selectedCountry.name.nativeName && selectedCountry.name.nativeName[Object.keys(selectedCountry.name.nativeName)[0]].official}</Data>
                            <Data><strong> Region: </strong> {selectedCountry.region}</Data>
                            <Data><strong> Population: </strong>{selectedCountry.population.toLocaleString('en-US')}</Data>
                            <Data><strong> Sub Region: </strong>{selectedCountry.subregion}</Data>
                            <Data><strong> Capital: </strong>{selectedCountry.capital}</Data>
                        </DetailedData>
                        <DetailedData>
                            <Data><strong> Top Level Domain: </strong>{selectedCountry.tld}</Data>
                            <Data><strong> Currencies: </strong>{selectedCountry.currencies && selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]].name}</Data>
                            <Data><strong> Languages: </strong>{languageNamesString}</Data>
                        </DetailedData>
                    </CountryData>
                    <BordersComponent>
                        <CountryName><strong> Border Countries: </strong></CountryName>
                        <BorderingButtons
                            borders={filteredBorderingCountries}
                            setSelectedCountry={setSelectedCountry}
                        />
                    </BordersComponent>
                </TextBlock>
            </CountryDetails>
        </>
    );
};

export default Details;
