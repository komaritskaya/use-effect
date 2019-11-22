import React, { useState } from "react";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [info, setInfo] = useState({ id: null, name: "" });

  const handleInfo = (id, name) => {
    setInfo({ id, name });
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <div className="ui grid">
          <div className="eight wide column">
            <List handleInfo={handleInfo} />
          </div>
          <div className="eight wide column">
            {info ? <Details info={info} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
