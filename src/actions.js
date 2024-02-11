import axios from 'axios';

export const getRandomGreeting = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/');
      dispatch(setGreeting(response.data.greeting));
    } catch (error) {
      console.error('Error fetching random greeting:', error);
    }
  };
};

export const setGreeting = greeting => ({
  type: 'SET_GREETING',
  payload: greeting,
});