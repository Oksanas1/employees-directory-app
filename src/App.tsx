import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EmployeeProfile from './features/employee-profile';
import EmployeeList from './features/employee-list';
import ErrorPage from './features/error-page';
import './index.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </Provider>
);
export default App;
