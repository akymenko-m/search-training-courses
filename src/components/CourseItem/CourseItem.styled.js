import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 40px) / 3);
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;
  padding: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 5px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Image = styled.img`
  object-fit: cover;
`;
export const CourseInfo = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-evenly;
  text-align: center;
`;
