import React, { Component, ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/pages/mainPage/mainPage';
import AboutUs from './components/pages/aboutUs/aboutUs';
import ErrorPage from './components/pages/errorPage/errorPage';
import MainLayout from './layouts/main';
import CreatedFormPage from './components/pages/createdFormPage/createdFormPage';
class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/form" element={<CreatedFormPage />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" replace={true} />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
