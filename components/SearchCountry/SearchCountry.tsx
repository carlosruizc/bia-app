import React from 'react';
import { Input } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface SearchCountryProps {
    setSearchTerm: React.Dispatch<string>;
}

const SearchCountry: React.FC<SearchCountryProps> = ({
    setSearchTerm
}) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Input
                placeholder="Search for a country…"
                startDecorator={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                sx={{ maxWidth: 400, border: "none", gap: "10px", padding: "0 20px", boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)", backgroundColor: "var(--secondary)", color: "var(--text)" }}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchCountry;
