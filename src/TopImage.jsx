import React, { useState } from "react";

function TopImage() {
  const [href, setHref] = useState("https://loremflickr.com/200/200?random=2");

  const updateHref = (path) => {
    setHref(path);
  };
  return (
    <div>
      <img
        src={href}
        onClick={() => updateHref("https://loremflickr.com/200/200?random")} //use state enables us to see the updates instantly on the dom
        //without reloading the page.
      ></img>
    </div>
  );
}
export default TopImage;
