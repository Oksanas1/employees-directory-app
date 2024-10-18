import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Employee } from './employeesSlice';
import { selectFilteredEmployees } from './filterEmployees.selector';

export type GroupeEmployee = {
  [key: string]: Employee[];
};

export const selectSortedEmployees = createSelector(
  [selectFilteredEmployees, (state: RootState) => state.employees.filter.sortBy],
  (updatedEmployees: Employee[], sortBy: string): GroupeEmployee => {
    let groupedEmployees: GroupeEmployee = {};

    if (sortBy === 'ageSort') {
      groupedEmployees = updatedEmployees
        .sort((a, b) => a.birthDate - b.birthDate)
        .reduce((groups: Record<string, Employee[]>, employee) => {
          const birthYear = new Date(employee.birthDate).getFullYear().toString();
          if (!groups[birthYear]) {
            groups[birthYear] = [];
          }

          groups[birthYear].push(employee);
          return groups;
        }, {});
    } else if (updatedEmployees.length) {
      groupedEmployees.text = updatedEmployees.sort();
    }

    return groupedEmployees;
  },
);
