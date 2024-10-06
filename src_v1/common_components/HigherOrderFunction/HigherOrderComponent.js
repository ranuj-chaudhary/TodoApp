import { useEffect, useState } from 'react';
const WithCounter = ({ WrappedComponent, url }) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);
  function handleCount() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    async function fetchData(url) {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error fetching url');
        }
        const resData = await res.json();
        if (resData) {
          setData(resData);
        }
      } catch (err) {
        setErrorMessage(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(url);
  }, [setData, setErrorMessage, url]);

  if (errorMessage.length > 0) {
    return <p>errorMessage</p>;
  }

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <WrappedComponent count={count} incrementCount={handleCount} data={data} />
  );
};

export default WithCounter;
