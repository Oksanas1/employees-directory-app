export type PositionWork = 'All' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' | 'Android';

export type EmployeePosition = 'all' | 'designer' | 'analyst' | 'manager' | 'iOS' | 'android';

export type SortOption = 'ageSort' | 'nameSort';

export type StatusQuery = 'loading' | 'succeeded' | 'failed';

export type Employee = {
  id: string;
  name: string;
  position: EmployeePosition;
  birthDate: number;
  phone: string;
  avatar: string;
  tag: string | null;
  email: string;
};
