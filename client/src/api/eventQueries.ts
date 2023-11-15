import { useQuery, type UseQueryResult } from 'react-query';
import { getEventsByCategory } from './events/events';
import { type Event } from '../utils/interfaces';

interface IEventsByCategoryQueryResult {
  data: Event;
  error: Error | null;
  isLoading: boolean;
}

export const useEventsByCategory = (
  activeButton: string
): UseQueryResult<IEventsByCategoryQueryResult> => {
  const intervalMs = 30000;
  return useQuery(
    ['eventByCategory', activeButton],
    async () => await getEventsByCategory(activeButton),
    {
      refetchInterval: intervalMs
    }
  );
};
