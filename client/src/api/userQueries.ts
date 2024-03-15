import { useQuery, type UseQueryResult } from 'react-query';
import { type Event } from '../utils/interfaces';
import { type IUserData, getUserInfo } from './users/user';

export interface IOneEvent {
  data: Event;
  error: Error | null;
  isLoading: boolean;
  category_of_event: string;
}

const intervalMs = 3000;

export const useGetUserInfo = (userId: string | undefined): UseQueryResult<IUserData> => {
  return useQuery(['userInfo', userId], async () => await getUserInfo(userId), {
    refetchInterval: intervalMs
  });
};
