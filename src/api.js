import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34726411-d79d2bb382e9b3b825be3cd38';

export const fetchImage = async (imagesName, page) => {
  const response = await axios.get('/', {
    params: {
      q: imagesName,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};
