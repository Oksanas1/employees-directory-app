import type { Employee } from '../../../redux/employeesSlice';
import type { EmployeePosition } from '../../../entities/employee/types';

export const filteredEmployees = (
  employees: Employee[],
  searchText: string,
  position: EmployeePosition,
): Employee[] => {
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
};
