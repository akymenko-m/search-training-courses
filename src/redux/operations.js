import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://api.wisey.app',
});
const VERSION = 'api/v1';

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getToken = createAsyncThunk(
  'courses/getToken',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `${VERSION}/auth/anonymous?platform=subscriptions`,
        credentials
      );
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCourses = createAsyncThunk(
  'courses/getCourses',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `${VERSION}/core/preview-courses`,
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestDataCourse = async courseId => {
  const { data } = await instance.get(
    `${VERSION}/core/preview-courses/${courseId}`
  );
  return data;
};
