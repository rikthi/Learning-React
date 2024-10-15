import React, { useState } from "react";
function Form() {
  const [eventName, setEventName] = useState("Enter your event");
  const [email, setEmail] = useState("Enter Email");
  const [type, setType] = useState("Select type");

  const updateEventName = (e) => {
    setEventName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateType = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <p>{eventName}</p>
      <input type="text" onChange={updateEventName}></input>
      <p>Email: {email}</p>
      <textArea value={email} onChange={updateEmail} />
      <p>Type of Event: {type}</p>
      <select value={type} onChange={updateType}>
        <option value="">Select option</option>
        <option value="Networking">Networking</option>
        <option value="Cultural">Cultural</option>
        <option value="Charity">Charity</option>
      </select>
    </div>
  );
}
export default Form;
