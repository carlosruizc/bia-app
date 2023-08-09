import React, { useState } from 'react';
import Layout from '../components/Layout';
import CountryList from '../components/CountryList';
import Filters from '../components/Filters';
import { fetchCountries } from '../helpers/api';
import { CountryDetails, FlagBig } from 'components/StyledComponents';
import Image from 'next/image';
import Details from '../components/Details';
import { Button } from '@mui/joy';

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

interface HomePageProps {
    countries: Country[];
}

const HomePage: React.FC<HomePageProps> = ({ countries }) => {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const regions = Array.from(new Set(countries.map((country) => country.region)));

    const filteredCountries = selectedRegion && selectedRegion !== "all"
        ? countries.filter((country) => country.region === selectedRegion)
        : countries;

    const searchedCountries = searchTerm
        ? filteredCountries.filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : filteredCountries;

    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
    };

    return (
        <Layout>
            {!selectedCountry ? (
                <>
                    <Filters
                        regions={regions}
                        selectedRegion={selectedRegion}
                        onRegionChange={handleRegionChange}
                        setSearchTerm={setSearchTerm}
                    />
                    <CountryList
                        countries={searchedCountries}
                        setSelectedCountry={setSelectedCountry}
                    />
                </>
            ) :
                (
                    <>

                        <div>

                            <Details selectedCountry={selectedCountry} onBackClick={() => setSelectedCountry(null)} />
                        </div>
                    </>

                )}
        </Layout>
    );
};

export async function getStaticProps() {
    const countries = await fetchCountries();
    countries.sort((a: { name: { common: string; }; }, b: { name: { common: any; }; }) => a.name.common.localeCompare(b.name.common));

    return {
        props: { countries },
    };
}

export default HomePage