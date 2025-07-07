import { fetchLandingContent } from '@infrastructure/api/rest/landingApi';

export const landingService = {
  getLandingData: async () => {
    return await fetchLandingContent();
  },
};
