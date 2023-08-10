import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    border-radius: 8px;
    text-align: left;
    background-color: var(--secondary);
    cursor: pointer;
    margin: 10px 0;
    font-color: hsl(0, 0%, 52%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

export const Flag = styled.img`
    max-width: 200px;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Info = styled.div`
    padding: 0px 20px 5px 20px;
    cursor: pointer;
`;
