import React from 'react';
import { ButtonComponent, Button } from '../general/styles';

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

interface BorderingButtonsProps {
    borders: ("" | Country)[];
    setSelectedCountry: React.Dispatch<Country>
}

const BorderingButtons: React.FC<BorderingButtonsProps> = ({ borders, setSelectedCountry }) => {

    const onBorderClick = (country: Country) => {
        setSelectedCountry(country);
    }

    const borderingButtons = borders.map(border => {
        if (border !== "") {
            return (
                <Button key={border.name.common} onClick={() => onBorderClick(border)}>
                    {border.name.common}
                </Button>
            )
        };
        return null;
    });

    return (
        <ButtonComponent>
            <div className='border-button'>
                {borderingButtons}
            </div>
        </ButtonComponent>)
};

export default BorderingButtons;
