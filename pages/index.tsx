import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import CountryList from '../components/CountryList/CountryList';
import Filters from '../components/Filters/Filters';
import { fetchCountries } from '../helpers/api';
import Details from '../components/Details/Details';

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

                            <Details
                                selectedCountryState={[selectedCountry, setSelectedCountry]}
                                onBackClick={() => setSelectedCountry(null)}
                                countries={countries}
                            />
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