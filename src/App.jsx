import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Sidebar Home={Home}/>
    </>
  );
}

export default App;
