import AboutCoursePage from 'pages/AboutCoursePage/AboutCoursePage';
import CoursesPage from 'pages/CoursesPage/CoursesPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
