import styled from 'styled-components';

export const HeaderComponent = styled.header`
    background: var(--secondary);
    color: var(--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
`;

export const ToggleButton = styled.button`
    display: flex;
    color: var(--text);
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Icon = styled.span`
    display: flex;
    color: var(--text);
    font-size: 20px;
    margin-right: 8px;
`;
