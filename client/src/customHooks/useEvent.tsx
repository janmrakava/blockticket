import { useParams } from 'react-router-dom';
import { type IEventProps } from '../components/EventBanners/MobileEventBanner';
import { useGetOneEvent } from '../api/eventQueries';

export const useEvent = (): any => {
  const params = useParams();

  console.log(params);

  const {
    data: eventQueryData,
    error: eventQueryError,
    isLoading: eventQueryIsLoading
  } = useGetOneEvent(params.eventId);

  const eventData = eventQueryData as unknown as IEventProps | null;

  return {
    eventData,
    eventQueryError,
    eventQueryIsLoading
  };
};
