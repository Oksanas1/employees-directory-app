import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import EmployeeProfile from './features/employee-profile';
import EmployeeList from './features/employee-list';
import ErrorPage from './features/error-page';
import { fetchEmployees } from './redux/employeesSlice';
import './index.scss';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEmployees());
  }
  ,[dispatch]);

  return (
      <Router basename="/">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employees/:id" element={<EmployeeProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
};
export default App;
