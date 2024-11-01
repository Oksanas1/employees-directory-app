import { Employee } from '../../../redux/employeesSlice';
import { filteredEmployees } from './filterEmployees';
import type { SortOption, EmployeePosition } from '../../../entities/employee/types';

export type GroupeEmployee = {
  [key: string]: Employee[];
};

export const sortEmployees = (
  employees: Employee[],
  sortBy: SortOption,
  searchText: string,
  position: EmployeePosition,
): GroupeEmployee => {
  const updatedEmployees: Employee[] = filteredEmployees(employees, searchText, position);
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
};
