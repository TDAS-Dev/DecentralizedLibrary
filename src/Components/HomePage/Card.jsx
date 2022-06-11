function Card(props) {
  return (
    <div className={`bg-white shadow-sm rounded my-2 ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
