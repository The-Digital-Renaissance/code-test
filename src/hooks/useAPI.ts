import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { Task } from '../types';

const useAPI = () => {
  const getTasks = useCallback(async (): Promise<Task[]> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      });

      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });

        return [];
      }

      return await response.json();
    } catch (e) {
      console.log(e);

      toast(`API request failed`, { type: 'error' });
    }

    return [];
  }, []);

  const login = async (data: any) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data)
      });

      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });
      }

      return await response.json();
    } catch (error) {
      console.log(error)
      toast(`API request failed`, { type: 'error' });
    }
  }

  return {
    getTasks,
    login
  };
};

export default useAPI;