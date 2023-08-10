import styled from 'styled-components';

export const BordersComponent = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const CountryData = styled.div`
    display: flex;
    gap: 60px;

    @media (max-width: 920px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const CountryName = styled.p`
    min-width: 140px;
`;

export const FlagBig = styled.img`
    max-width: 350px;

    @media (max-width: 380px) {
        max-width: 200px;
    }
`;

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
`;

export const CountryDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    margin: 30px 30px;

    @media (max-width: 720px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const DetailedData = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    justify-content: left;
    min-width: 200px;
`;
