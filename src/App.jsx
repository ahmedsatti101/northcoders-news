import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import { UserComponent } from "./contexts/User";
import ViewUsers from "./components/Users";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<ViewUsers />} />
        <Route path="/users/:username" element={<UserComponent />} />
        {/* /topics/:topic_name */}
      </Routes>
    </>
  );
}

export default App;
