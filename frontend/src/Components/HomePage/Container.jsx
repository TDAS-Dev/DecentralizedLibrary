const Container = (props) => {
  return <div className="flex flex-row space-x-5">{props.children}</div>;
};

const containerStyle = `grid grid-col-2 `
export default Container;
