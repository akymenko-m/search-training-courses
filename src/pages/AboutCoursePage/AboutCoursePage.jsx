import { Button } from '@chakra-ui/react';
import { LessonItem } from 'components/LessonItem/LessonItem';
import Loader from 'components/Loader/Loader';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getToken, requestDataCourse } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import {
  AboutCourseContainer,
  CourseNameContainer,
  General,
  LessonsList,
  Title,
  VideoContainer,
} from './AboutCoursePage.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutCoursePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const { courseId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const [courseDetails, setCourseDetails] = useState(null);
  const [lessonDetails, setLessonDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async courseId => {
      try {
        await dispatch(getToken());

        const courseDetails = await requestDataCourse(courseId);
        setCourseDetails(courseDetails);

        const firstLesson = courseDetails?.lessons?.find(el => el.order === 1);
        setLessonDetails(firstLesson);
      } catch (error) {
        console.log(error);
        const notify = () =>
          toast.error(error, {
            theme: 'dark',
          });
        notify();
      }
    };
    fetchCourseDetails(courseId);
  }, [courseId, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        courseDetails && (
          <div>
            <CourseNameContainer>
              <Title>{courseDetails.title}</Title>
            </CourseNameContainer>

            <AboutCourseContainer>
              <Button colorScheme="blue" variant="outline" size="sm">
                <Link to={location.state?.from ?? '/core/preview-courses'}>
                  ← Go back
                </Link>
              </Button>

              <General>
                <p>
                  <b>Rating:</b> {courseDetails.rating}
                </p>
                <p>
                  <b>Description:</b> {courseDetails.description}
                </p>

                {lessonDetails && (
                  <VideoContainer>
                    <VideoPlayer
                      lessonNumber={lessonDetails.order}
                      link={lessonDetails.link}
                      poster={courseDetails.previewImageLink + '/cover.webp'}
                      title={lessonDetails.title}
                    />
                  </VideoContainer>
                )}

                <LessonsList>
                  {courseDetails?.lessons
                    ?.sort((a, b) => a.order - b.order)
                    .map(lesson => {
                      return <LessonItem key={lesson.id} lesson={lesson} />;
                    })}
                </LessonsList>
              </General>
            </AboutCourseContainer>
            <ToastContainer />
          </div>
        )
      )}
    </>
  );
};

export default AboutCoursePage;
