import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
