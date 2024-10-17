import { Employee } from '../state/employeesSlice';

const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export const getEmployeeFromDB = (): Promise<Employee[]> =>
  fetch(`${baseUrl}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}`);
  });

export const getEmployeeByIdFromDB = (id: string): Promise<Employee> =>
  fetch(`${baseUrl}/${id}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}`);
  });
