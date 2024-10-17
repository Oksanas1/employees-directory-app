import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import EmployeeProfile from './component/employee-profile/EmployeeProfile';
import EmployeeList from './component/employee-list/EmployeeList';
import './index.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  </Provider>
);
export default App;
