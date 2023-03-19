import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Item,
  Image,
  StyledLink,
  Title,
  CourseInfo,
} from './CourseItem.styled';

export const CourseItem = ({ course }) => {
  const location = useLocation();
  const skills = course.meta.skills;

  return (
    <>
      <Item>
        <StyledLink
          to={`/core/preview-courses/${course.id}`}
          state={{ from: location }}
        >
          <Title>{course.title}</Title>
          <Image
            src={course.previewImageLink + '/cover.webp'}
            alt={course.title}
          />

          <CourseInfo>
            <p>
              <b>Number of lessons:</b> {course.lessonsCount}
            </p>
            <p>
              <b>Raiting:</b> {course.rating}
            </p>
            {skills?.length > 0 && (
              <p>
                <b>Skills:</b> {skills.join(', ')}
              </p>
            )}
          </CourseInfo>
        </StyledLink>
      </Item>
    </>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};
