import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response);
    } catch (error) {
      setError('We can noot find this movie');
    }
    setLoading(false);
  };

  useEffect(() => {
    !loading && fetchData();
  }, []);
  return { data, error, loading, fetchData };
};
