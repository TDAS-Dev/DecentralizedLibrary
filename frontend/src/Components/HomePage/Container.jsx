const Container = (props) => {
  return <div className="flex flex-row justify-between">{props.children}</div>;
};

// const containerStyle = `grid grid-col-2 `
export default Container;
