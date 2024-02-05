import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SidebarNav from "./components/Sidebar/Sidebar";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:article_id" element={<SingleArticle />} />
      </Routes>
      <SidebarNav />
    </>
  );
}

export default App;
