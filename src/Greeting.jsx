function Greeting(props) {
  if (props.registered) {
    return <h2>Hello {props.UserName}</h2>;
  } else {
    return (
      <div>
        <h2>Do you want to sign up?</h2>
      </div>
    );
  }
}
export default Greeting;
