import axios, { type AxiosError } from 'axios';

import { type UniqueEmailResult } from '../../pages/Register';
import { type User } from '../../utils/interfaces';
import Cookies from 'universal-cookie';

interface IPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
}
interface IPasswordInfo {
  password: string;
  phoneNumber: string;
}
interface IAddressInfo {
  country: string;
  city: string;
  street: string;
  streetNumber: string;
  zipCode: string;
}
export interface IUserData {
  _id: string;
  first_name: string;
  last_name: string;
  password: string;
  address: string;
  favorite_events: [];
  prefered_language: string;
  avatar: string;
  last_login: Date;
  transaction: [];
  tickets: [];
  role: string;
  gender: string;
  date_of_birth: string;
}
interface ILoginResponse {
  user: IUserData;
  token: any;
}

const cookies = new Cookies();

export const checkEmail = async (email: string): Promise<UniqueEmailResult> => {
  try {
    const response = await axios.post(
      '/api/users/checkEmail',
      { email },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error checking email:', error);
    return { canUse: false };
  }
};

export const registerUser = async (
  personalInfo: IPersonalInfo,
  passwordInfo: IPasswordInfo,
  addressInfo: IAddressInfo
): Promise<string> => {
  try {
    const response = await axios.post(
      '/api/users/register',
      {
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        email: personalInfo.email,
        telNumber: passwordInfo.phoneNumber,
        password: passwordInfo.password,
        dateOfBirth: personalInfo.dateOfBirth,
        gender: personalInfo.gender,
        address: {
          country: addressInfo.country,
          city: addressInfo.city,
          street: addressInfo.street,
          streetNumber: addressInfo.streetNumber,
          zipCode: addressInfo.zipCode
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string): Promise<ILoginResponse> => {
  try {
    const response = await axios.post(
      '/api/users/login',
      {
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const token = response.data.token;
    const user = response.data.user;
    return { user, token };
  } catch (error: unknown) {
    const typedError = error as AxiosError;
    if (typedError.response != null && typedError.response.status === 401) {
      throw new Error('invalid_password');
    } else if (typedError.response != null && typedError.response.status === 404) {
      throw new Error('email_not_found');
    } else {
      throw new Error('server_error');
    }
  }
};

export const getUserInfo = async (userId: string | undefined): Promise<User> => {
  try {
    const response = await axios.get(`/api/users/getUser/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('User was not found');
  }
};

export const addToFavorites = async (userId: string, eventId: string): Promise<string> => {
  try {
    const token = cookies.get('authToken');
    const response = await axios.post(
      `/api/users/addToFavorites`,
      { userId, eventId },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};
