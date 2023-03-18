import { CoursesList } from 'components/CoursesList/CoursesList';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, getToken } from 'redux/operations';
import { getCoursesData, selectIsLoading } from 'redux/selectors';
import {
  CoursesContainer,
  Hero,
  HeroContainer,
  Main,
  SubTitle,
  Title,
} from './CoursesPage.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let PageSize = 10;

const CoursesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const courses = useSelector(getCoursesData);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return courses.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, courses]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        await dispatch(getToken());
        dispatch(getCourses());
      } catch (error) {
        console.log(error);
        const notify = () =>
          toast.error(error, {
            theme: 'dark',
          });
        notify();
      }
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Main>
          <Hero>
            <HeroContainer>
              <Title>E-learning platform</Title>
              <SubTitle>Your courses to success</SubTitle>
            </HeroContainer>
          </Hero>

          <CoursesContainer>
            <CoursesList courses={currentTableData} />
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={courses.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </CoursesContainer>
        </Main>
      )}
      <ToastContainer />
    </div>
  );
};

export default CoursesPage;
