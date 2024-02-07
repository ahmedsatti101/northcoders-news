import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SidebarNav from "./components/Sidebar/Sidebar";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import LoggedInUser from "./components/User/LoggedInUser";
import CreateUser from "./components/User/CreateUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/create-profile" element={<CreateUser />} />
        <Route path="/users/:username" element={<LoggedInUser />} />
      </Routes>
      {/* <SidebarNav /> */}
    </>
  );
}

export default App;
