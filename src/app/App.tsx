import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import AboutUs from './pages/aboutUs/aboutUs';
import ErrorPage from './pages/errorPage/errorPage';
import MainLayout from './layouts/main';
import CreatedFormPage from './pages/createdFormPage/createdFormPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const ROUTES = {
    mainPage: '/',
    aboutPage: '/about',
    formPage: '/form',
    errorPage: '/404',
  };
  return (
    <>
      <Routes>
        <Route path={ROUTES.mainPage} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.aboutPage} element={<AboutUs />} />
          <Route path={ROUTES.formPage} element={<CreatedFormPage />} />
          <Route path={ROUTES.errorPage} element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
