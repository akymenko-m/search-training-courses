import PropTypes from 'prop-types';
import { CourseItem } from 'components/CourseItem/CourseItem';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { List } from './CoursesList.styled';

export const CoursesList = ({ courses }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <List>
        {courses.map(course => {
          return <CourseItem key={course.id} course={course} />;
        })}
      </List>
    </>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
