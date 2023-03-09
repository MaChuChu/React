
import { useState } from "react";
import Content from "./Content";

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Content
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
