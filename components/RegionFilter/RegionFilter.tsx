import React from 'react';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { RegionComponent } from './styles';


interface RegionFilterProps {
    regions: string[];
    selectedRegion: string;
    onRegionChange: (region: string) => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({
    regions,
    selectedRegion,
    onRegionChange,
}) => {
    const sortedRegions = [...regions].sort();

    const handleRegionChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        newValue && onRegionChange(newValue);
    };

    return (
        <RegionComponent>
            <Select
                placeholder="Filter by Region"
                value={selectedRegion}
                onChange={handleRegionChange}
                indicator={<FontAwesomeIcon icon={faChevronDown} />}
                sx={{
                    width: 200, border: "none", boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)", background: "var(--secondary)", color: "var(--text)", '&:hover': {
                        background: "var(--secondary)",
                        boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <Option value="all">All Regions</Option>
                {sortedRegions.map((region) => (
                    <Option key={region} value={region}>
                        {region}
                    </Option>
                ))}
            </Select>
        </RegionComponent>
    );
};

export default RegionFilter;
