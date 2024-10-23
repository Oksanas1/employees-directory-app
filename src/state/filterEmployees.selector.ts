import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Employee, FilterOption } from './employeesSlice';

export const selectFilteredEmployees = createSelector(
  [(state: RootState) => state.employees.employees, (state: RootState) => state.employees.filter],
  (employees: Employee[], filter: FilterOption): Employee[] => {
    const { position, searchText } = filter;

    let updatedEmployees = [...employees];

    if (searchText) {
      updatedEmployees = updatedEmployees.filter(
        ({ name, email, tag }) =>
          name.toLowerCase().includes(searchText.toLowerCase()) ||
          email.toLowerCase().includes(searchText.toLowerCase()) ||
          (tag && tag.toLowerCase().includes(searchText.toLowerCase())),
      );
    }

    if (position && position !== 'all') {
      updatedEmployees = updatedEmployees.filter(employee => position.includes(employee.position));
    }

    return updatedEmployees;
  },
);
