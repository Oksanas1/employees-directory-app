import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Employee, FilterOption } from './employeesSlice';

export const selectFilteredEmployees = createSelector(
  [(state: RootState) => state.employees.employees, (state: RootState) => state.employees.filter],
  (employees: Employee[], filter: FilterOption): Employee[] => {
    const { jobTitle, textFilter } = filter;

    let updatedEmployees = [...employees];

    if (textFilter) {
      updatedEmployees = updatedEmployees.filter(
        ({ name, email, tag }) =>
          name.toLowerCase().includes(textFilter.toLowerCase()) ||
          email.toLowerCase().includes(textFilter.toLowerCase()) ||
          (tag && tag.toLowerCase().includes(textFilter.toLowerCase())),
      );
    }

    if (jobTitle && jobTitle !== 'Все') {
      updatedEmployees = updatedEmployees.filter(({ position }) =>
        jobTitle.toLowerCase().includes(position.toLowerCase()),
      );
    }

    return updatedEmployees;
  },
);
