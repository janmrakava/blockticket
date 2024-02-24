import { Router } from 'express';
import { Request, Response } from 'express';
import { User } from '../models/Users';
import { UserAddress } from '../models/UsersAddresses';
import moment from 'moment';
import bcrypt from 'bcrypt';
import { createToken } from './helpFunctions/helpFunctions';
import { IUserData } from '../insertFunctions/types';

export const UserController = Router();

UserController.post('/register', async (req: Request, res: Response) => {
  const { first_name, last_name, email, tel_number, username, password, date_of_birth, gender, role, prefered_language, address } = req.body;
  try {
    const addressData = address;
    const userAddress = new UserAddress({
      country: addressData.country,
      city: addressData.city,
      street: addressData.street,
      street_number: addressData.street_number,
      zip_code: addressData.zip_code,
    });

    const savedAddress = await userAddress.save();
    const dateConverted = moment(date_of_birth, 'DD.MM.YYYY').format();

    const newUser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      tel_number: tel_number,
      username: username,
      password: password,
      date_registration: new Date(),
      date_of_birth: dateConverted,
      gender: gender,
      role: role,
      last_login: null,
      avatar: null,
      prefered_language: prefered_language,
      favorite_events: null,
      address: savedAddress._id,
    });

    await newUser.save();
    const token = createToken(newUser.toObject() as IUserData);
    res.status(200).json({ status: 'success', data: [newUser], message: 'Registrace proběhla úspěšně.', token });
  } catch (error) {
    res.status(500).json({ status: 'error', data: [], message: 'Chyba serveru.', error });
  }
});

UserController.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Uživatel se zadaným jménem neexistuje' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Špatně zadané heslo' });
    }
    const token = createToken(user.toObject());
    res.status(200).json({ message: 'Přihlášení bylo úspěšné', token });
  } catch (error) {
    res.status(500).json({ message: 'Chyba serveru' });
  }
});

UserController.get('/userInfo/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate('address');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.send(user).status(200);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

UserController.put('/updateUser/:userId', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { updatedUserData, updatedAddressData } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    const userAddressId = updatedUser?.address;
    const updatedAddress = await UserAddress.findByIdAndUpdate(userAddressId, updatedAddressData, {
      new: true,
    });

    res.status(200).json({ user: updatedUser, address: updatedAddress });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

UserController.delete('/deleteUser/:userId', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userAddressId = user.address;
    const userAddress = await UserAddress.findById(userAddressId);

    await User.findByIdAndDelete(userId);

    if (userAddress) {
      await UserAddress.findByIdAndDelete(userAddressId);
    }
    res.status(200).json({ message: 'User and address deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

UserController.post('/checkEmail', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).json({ canUse: false, message: 'Email already exists!' });
    } else {
      return res.status(200).json({ canUse: true, message: 'Email is free to use.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

UserController.post('/checkUsername', async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ exists: true, message: 'Username already exists!' });
    } else {
      return res.status(200).json({ exists: false, message: 'Username is free to use.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
