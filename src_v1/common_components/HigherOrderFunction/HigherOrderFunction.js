const HigherOrderFuntion = (ComponentToUpdate) => {

  return function (props) {
    return <ComponentToUpdate {...props} />;
  };
};
export default HigherOrderFuntion;


// use currying in core
// ({OriginalComponent}) => ({props}) => <OriginalComponent {...props} />

// const withConditionalFeedback =
//   ({ loadingFeedback, noDataFeedback, dataEmptyFeedback }) =>
//   (Component) =>
//   (props) => {
//     if (props.isLoading) return <div>{loadingFeedback || 'Loading data.'}</div>;

//     if (!props.data)
//       return <div>{noDataFeedback || 'No data loaded yet.'}</div>;

//     if (!props.data.length)
//       return <div>{dataEmptyFeedback || 'Data is empty.'}</div>;

//     return <Component {...props} />;
//   };
