import styled from 'styled-components';

export const FiltersComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 0 30px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
