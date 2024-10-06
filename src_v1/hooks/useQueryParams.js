import { useLocation } from 'react-router';

export const useQueryParams = function () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listType = queryParams.get('type');
  return [listType];
};
