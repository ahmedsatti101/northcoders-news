import ViewArticles from "./Articles/Articles";
import "../App.css";
import SortArticles from "./SortBy";

export default function Home() {
  return (
    <>
      <SortArticles />
      <ViewArticles />
    </>
  );
}
