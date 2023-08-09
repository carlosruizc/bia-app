import React from 'react';
import { Button } from '@mui/joy';
import { FlagBig } from 'components/StyledComponents';
import { CountryDetails, BackComponent } from 'components/StyledComponents';
import { MdArrowBack } from 'react-icons/md';

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

interface DetailsProps {
    selectedCountry: Country;
    onBackClick: () => void;
}

const Details: React.FC<DetailsProps> = ({ selectedCountry, onBackClick }) => {
    return (
        <>
            <BackComponent>
                <Button onClick={onBackClick} startDecorator={<MdArrowBack />} sx={{ width: "150px", height: "10px", border: "none", padding: "0 20px", boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)", backgroundColor: "hsl(0, 0%, 100%)", color: "black", gap: "10px" }} variant="plain" size="sm" >Back</Button>
            </BackComponent>
            <CountryDetails>
                <FlagBig src={selectedCountry.flags.svg} alt={`${selectedCountry.name.common} Flag`} />
                <div>
                    <h2>{selectedCountry.name.common}</h2>
                    <p>Population: {selectedCountry.population}</p>
                    <p>Region: {selectedCountry.region}</p>
                </div>
            </CountryDetails>
        </>
    );
};

export default Details;
