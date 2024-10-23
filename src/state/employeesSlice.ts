import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEmployeeFromDB } from '../getawey/index';

export type PositionWork = 'Все' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' | 'Android';
export type EmployeePosition = 'designer' | 'analyst' | 'manager' | 'iOS' | 'android';
export type SortOption = 'ageSort' | 'nameSort';
export type StatusQuery = 'loading' | 'succeeded' | 'failed';

export type FilterOption = {
  searchText: string;
  position: PositionWork;
  sortBy: SortOption;
};

export type Employee = {
  id: string;
  name: string;
  position: EmployeePosition;
  birthDate: number;
  phone: string;
  avatar: string;
  tag: string | null;
  email: string;
}

export type EmployeesState = {
  employees: Employee[];
  statusQuery: StatusQuery;
  error: string | null;
  filter: FilterOption;
}

const initialState: EmployeesState = {
  employees: [],
  statusQuery: 'loading',
  error: null,
  filter: { searchText: '', position: 'Все', sortBy: 'nameSort' },
};

export const fetchEmployees = createAsyncThunk<Employee[]>(
  'employees',
  async (): Promise<Employee[]> => {
    const response = await getEmployeeFromDB();
    return response;
  },
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEmployees.pending, state => {
        state.statusQuery = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.statusQuery = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.statusQuery = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { setFilter } = employeesSlice.actions;
export default employeesSlice.reducer;
