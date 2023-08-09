import React from 'react';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

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
        <div>
            <Select
                placeholder="Filter by Region"
                value={selectedRegion}
                onChange={handleRegionChange}
                indicator={<MdOutlineKeyboardArrowDown />}
                sx={{ width: 200, border: "none", boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)", backgroundColor: "hsl(0, 0%, 100%)" }}
            >
                <Option value="all">All Regions</Option>
                {sortedRegions.map((region) => (
                    <Option key={region} value={region}>
                        {region}
                    </Option>
                ))}
            </Select>

        </div>

    );
};

export default RegionFilter;
