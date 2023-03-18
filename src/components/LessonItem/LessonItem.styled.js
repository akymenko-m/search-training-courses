import styled from 'styled-components';

export const Item = styled.li`
  cursor: pointer;
  @media screen and (min-width: 450px) {
    width: calc((100% - 80px) / 3);
    text-align: center;
  }
  @media screen and (min-width: 1000px) {
    width: calc((100% - 100px) / 5);
  }
`;
