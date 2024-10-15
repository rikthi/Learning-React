import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
function Event(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.date}</p>
      <p>{props.willJoin ? "Going" : "Not Going"}</p>
    </div>
  );
}
// The following creates a warning in console if wrong type provided in props
Event.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  willJoin: PropTypes.bool,
};

Event.defaultProps = {
  name: "Unnamed Event",
  date: "Not specified",
  willJoin: false,
};
export default Event;
