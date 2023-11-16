import { useQuery, type UseQueryResult } from 'react-query';
import { getEventsByCategory } from './events/events';
import { type Event } from '../utils/interfaces';
import { getUniqueCities } from './addresses/addresses';

interface IEventsByCategoryQueryResult {
  data: Event;
  error: Error | null;
  isLoading: boolean;
}

interface IUniqueCitiesQueryResult {
  data: string[];
  error: Error | null;
  isLoading: boolean;
}
const intervalMs = 30000;

export const useEventsByCategory = (
  activeButton: string
): UseQueryResult<IEventsByCategoryQueryResult> => {
  return useQuery(
    ['eventByCategory', activeButton],
    async () => await getEventsByCategory(activeButton),
    {
      refetchInterval: intervalMs
    }
  );
};

export const useUniqueCities = (): UseQueryResult<IUniqueCitiesQueryResult> => {
  return useQuery(['uniqueCities'], async () => await getUniqueCities(), {
    refetchInterval: intervalMs
  });
};
