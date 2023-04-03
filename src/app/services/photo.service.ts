import { httpService } from './http.service';

const photoEndpoint = 'photos?';
const searchEndpoint = 'search/photos?';
const apiKey = '-xe8z1BYEBuBQTk-jMqe2U3eECgdj14Showo4hEm6xg';
const photoService = {
  fetch: async (page: number) => {
    const data = await httpService.get(photoEndpoint, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
      params: {
        page: page,
        per_page: 15,
      },
    });
    return data.data;
  },
  search: async (query: string, page: number) => {
    const data = await httpService.get(searchEndpoint, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
      params: {
        page: page,
        query: query,
        per_page: 15,
      },
    });
    console.log(data);
  },
};

export default photoService;
