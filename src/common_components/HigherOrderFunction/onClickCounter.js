import HigherOrderFuntion from './HigherOrderFunction';
import WithCounter from './HigherOrderComponent';
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
export default UpdatedCounter;
