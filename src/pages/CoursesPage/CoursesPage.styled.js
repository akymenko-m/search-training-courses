import styled from 'styled-components';
import bcImage from '../../images/elearning-bg.jpg';
import bcImageMob from '../../images/elearning-bg-mob.png';

export const Main = styled.main`
  padding-bottom: 20px;
`;

export const Hero = styled.section`
  width: 100%;
  height: 300px;
  padding: 100px 0;
  margin-bottom: 20px;
  background-image: url(${bcImageMob});
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 768px) {
    background-image: url(${bcImage});
  }
`;

export const HeroContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0 10px;
    position: absolute;
    right: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 30px;
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    color: darkblue;
  }
`;

export const CoursesContainer = styled.div`
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;
