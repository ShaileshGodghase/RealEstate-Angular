import { environment } from 'src/environments/environment';

export function getHttpUrlObject() {
  const obj = {
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': environment.rapidApiKey,
      'X-RapidAPI-Host': environment.rapidApiHost,
    },
    params: {
      locationExternalIDs: '5002,6020',
      purpose: 'for-rent',
      hitsPerPage: '25',
      page: '0',
      lang: 'en',
      sort: 'city-level-score',
      rentFrequency: 'monthly',
      categoryExternalID: '4',
    },
  };
  return obj;
}
