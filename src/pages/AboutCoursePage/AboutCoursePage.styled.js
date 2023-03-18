import styled from 'styled-components';
import bcImage from '../../images/elearning-bg.jpg';
import bcImageMob from '../../images/elearning-bg-mob.png';

export const AboutCourseContainer = styled.div`
  padding: 0 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 0 40px 40px;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 80px 80px;
  }
`;
export const General = styled.div`
  margin-top: 20px;
`;

export const VideoContainer = styled.div`
  margin: 20px auto;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`;

export const CourseNameContainer = styled.div`
  width: 100%;
  height: 300px;
  padding: 80px 16px;
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

export const Title = styled.h2`
  margin: 0 auto;
  max-width: 330px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 400px;
    padding-right: 50px;
    position: absolute;
    right: 0;
    font-size: 36px;
  }
  @media screen and (min-width: 1000px) {
    width: 60%;
    max-width: 500px;
    padding-right: 150px;
    font-size: 40px;
  }
`;

export const LessonsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none;
  @media screen and (min-width: 450px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;
