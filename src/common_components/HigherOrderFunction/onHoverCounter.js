import WithCounter from './HigherOrderComponent';
import HigherOrderFuntion from './HigherOrderFunction';
const OnHoverCounter = (props) => {
  return <h1 onMouseOver={props.incrementCount}>Count {props.count}</h1>;
};
const HoverCounter = HigherOrderFuntion(OnHoverCounter);



const UpdatedHoverCounter = (props) => {
  return <WithCounter WrappedComponent={HoverCounter} url={''} {...props} />;
};
export default UpdatedHoverCounter;