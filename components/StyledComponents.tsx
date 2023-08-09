// components/CountryCardStyles.ts
import styled from 'styled-components';

export const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
`;

export const FiltersComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 0 30px;

`;

export const DropDownComponent = styled.div`
    min-width: 200px;
`;

export const SelectComponent = styled.select`
    border: none;
    width:100%;
    padding: 10px;
    border-radius: 4px;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    outline: none;
    cursor: pointer;
`;

export const StyledCountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 30px;
  gap: 20px
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 8px;
  text-align: left;
  background-color: hsl(0, 0%, 100%);
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

export const FlagBig = styled.img`
  max-width: 250px;
  
`;

export const Info = styled.div`  
  padding: 0px 20px 5px 20px;
  cursor: pointer;
`;

export const Data = styled.p`
  margin: 0px;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.span`
  display: flex;
  font-size: 20px;
  margin-right: 8px;
`;

export const BackComponent = styled.div`
    margin: 30px 30px 0 30px;
`

export const CountryDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin: 30px 30px;
`;