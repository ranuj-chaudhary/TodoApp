import useWindowResize from "./useWindowResize";
const TestWindowSize = function () {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className="container">
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
};

export default TestWindowSize;