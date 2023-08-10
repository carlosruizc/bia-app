import React from 'react';
import RegionFilter from '../RegionFilter/RegionFilter';
import SearchCountry from '../SearchCountry/SearchCountry';
import { FiltersComponent } from './styles';

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