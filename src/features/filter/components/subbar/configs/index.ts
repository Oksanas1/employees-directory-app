import type { PositionWork, EmployeePosition } from '../../../../../entities/employee/types';

type Option = {
  id: number;
  option: PositionWork;
  positionEmployee: EmployeePosition;
};

export const listOfFilterOption: Option[] = [
  { id: 1, option: 'All', positionEmployee: 'all' },
  { id: 2, option: 'Designers', positionEmployee: 'designer' },
  { id: 3, option: 'Analysts', positionEmployee: 'analyst' },
  { id: 4, option: 'Managers', positionEmployee: 'manager' },
  { id: 5, option: 'iOS', positionEmployee: 'iOS' },
  { id: 6, option: 'Android', positionEmployee: 'android' },
];
