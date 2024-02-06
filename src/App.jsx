import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SidebarNav from "./components/Sidebar/Sidebar";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      {/* <SidebarNav /> */}
    </>
  );
}

export default App;
