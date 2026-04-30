import { useEffect, useState, useRef } from 'react';


function useFetch(query, dataset) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const activeRequestRef = useRef(null);

  useEffect(() => {
   
    if (!query.trim()) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    
    const requestId = Math.random();
    activeRequestRef.current = requestId;

    
    const randomDelay = Math.random() * 900 + 300;
    const timer = setTimeout(() => {

      if (activeRequestRef.current !== requestId) {
        return;
      }

      const results = dataset.filter(
        (item) =>
          item.message.toLowerCase().includes(query.toLowerCase()) ||
          item.user.name.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase())
      );

      setData(results);
      setError(null);
      setLoading(false);
    }, randomDelay);


    return () => {
      clearTimeout(timer);
      activeRequestRef.current = null;
    };
  }, [query, dataset]);

  return { data, loading, error };
}

export default useFetch;
