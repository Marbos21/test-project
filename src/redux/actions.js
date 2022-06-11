export const GET_ALBUMS = 'GET_ALBUMS';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const getAlbums = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ALBUMS,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};
