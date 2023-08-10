import styled from 'styled-components';

export const ButtonComponent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .back-button {
        margin: 30px 30px 0 30px;
    }

    .border-button {
        margin: 30px;

        @media (max-width: 720px) {
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
        }
    }
`;

export const Button = styled.button`
    margin: 5px;
    background-color: var(--secondary);
    color: var(--text);
    font-family: inherit;
    border: none;
    min-width: 100px;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);

    @media (max-width: 720px) {
        margin: 5px;
    }

    &.back-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 0;
    }
`;

export const Data = styled.p`
    margin: 0px;
`;
