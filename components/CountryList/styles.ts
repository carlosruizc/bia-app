import styled from 'styled-components';

export const CountryListComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 30px;
    gap: 20px;

    @media (max-width: 480px) {
        display: flex;
        justify-content: center;
    }
`;
