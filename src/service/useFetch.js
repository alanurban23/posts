import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(res => {
        setIsPending(false);
        setData(res);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;