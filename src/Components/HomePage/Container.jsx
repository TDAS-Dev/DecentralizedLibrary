const Container = (props) => {
  return <div className="mx-3 flex flex-row justify-between">{props.children}</div>;
};

// const containerStyle = `grid grid-col-2 `
export default Container;
