import Event from "./Event";
import Greeting from "./Greeting";
import List from "./List";
import TopImage from "./TopImage";
import Form from "./Form";
import Counter from "./Counter";

import React from "react";

function App() {
  const eventsList = [
    { id: 20241, name: "White Festival", date: "25.11.2024", joined: false },
    { id: 20242, name: "Black Festival", date: "29.10.2024", joined: false },
    { id: 20243, name: "Yellow Festival", date: "31.12.2024", joined: true },
  ];
  return (
    <div>
      {/* <Event name="Winter Festival" date="25.11.2024" willJoin={false}></Event>
      <Event></Event> */}
      {/* <Greeting registered={true} UserName="Godin"></Greeting>
      <List eventsList={eventsList} category="Festivals"></List> */}
      {/* <TopImage></TopImage> */}
      {/* <Form /> */}
      <Counter />
    </div>
  );
}

export default App;
