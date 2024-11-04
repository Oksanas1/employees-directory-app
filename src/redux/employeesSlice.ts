import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEmployeeFromDB } from '../entities/employee/getawey/index';
import type { StatusQuery, Employee } from '../entities/employee/types/index';

export type EmployeesState = {
  employees: Employee[];
  statusQuery: StatusQuery;
  error: string | null;
};

const initialState: EmployeesState = {
  employees: [],
  statusQuery: 'loading',
  error: null,
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
  reducers: {},
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

export default employeesSlice.reducer;
