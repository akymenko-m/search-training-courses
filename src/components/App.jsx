// import AboutCoursePage from 'pages/AboutCoursePage/AboutCoursePage';
// import CoursesPage from 'pages/CoursesPage/CoursesPage';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';

const CoursesPage = lazy(() => import('pages/CoursesPage/CoursesPage'));
const AboutCoursePage = lazy(() =>
  import('pages/AboutCoursePage/AboutCoursePage')
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/core/preview-courses" element={<CoursesPage />} />
          <Route
            path="/core/preview-courses/:courseId"
            element={<AboutCoursePage />}
          />

          <Route
            path="*"
            element={<Navigate to="/core/preview-courses" replace={true} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
