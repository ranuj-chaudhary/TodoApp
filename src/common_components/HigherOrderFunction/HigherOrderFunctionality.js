import { useEffect, useState } from 'react';

function WithCounter({ WrappedComponent, url }) {
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
}

const OnClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>Increase Count</button>;
      <p>{props.count}</p>
    </div>
  );
};

const ClickCounter = HigherOrderFuntion(OnClickCounter);
const UpdatedCounter = (props) => {
  return <WithCounter WrappedComponent={ClickCounter} url={''} {...props} />;
};

const OnHoverCounter = (props) => {
  return <h1 onMouseOver={props.incrementCount}>Count {props.count}</h1>;
};
const HoverCounter = HigherOrderFuntion(OnHoverCounter);

const UpdatedHoverCounter = (props) => {
  return <WithCounter WrappedComponent={HoverCounter} url={''} {...props} />;
};

const HigherOrderFuntion = (ComponentToUpdate) => {
  return function (props) {
    return <ComponentToUpdate {...props} />;
  };
};
export default HigherOrderFuntion;
