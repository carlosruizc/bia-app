import React from 'react';
import RegionFilter from './RegionFilter';
import SearchCountry from './SearchCountry';
import { FiltersComponent } from './StyledComponents';

interface FilterProps {
    regions: string[];
    selectedRegion: string;
    onRegionChange: (region: string) => void;
    setSearchTerm: React.Dispatch<string>;
}

const Filters: React.FC<FilterProps> = ({
    regions,
    selectedRegion,
    onRegionChange,
    setSearchTerm,
}) => {

    return (
        <FiltersComponent>
            <SearchCountry
                setSearchTerm={setSearchTerm}
            />
            <RegionFilter
                regions={regions}
                selectedRegion={selectedRegion}
                onRegionChange={onRegionChange}
            />
        </FiltersComponent>


    )
}

export default Filters;