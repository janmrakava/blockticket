import axios from 'axios';
import { type UniqueEmailResult } from '../../pages/Register';

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
