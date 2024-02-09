import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function SortArticles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSeachQuery] = useState(searchParams.get("created_at"));
  //   const [order, setOrder] = useState(searchParams.get("order"));

  const handleSortBy = (e) => {
    e.preventDefault();
    setSearchParams({ sort_by: searchQuery });
    navigate(`/?sort_by=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="filter-toolbar">
      <DropdownButton title="Sort by" id="sort-by-button">
        <Dropdown.Item as="button" onClick={handleSortBy}>
          Date
        </Dropdown.Item>
        <Dropdown.Item as="button">Comment count</Dropdown.Item>
        <Dropdown.Item as="button">Votes</Dropdown.Item>
      </DropdownButton>

      <DropdownButton title="Order by" id="order-by-button">
        <Dropdown.Item as="button">Ascending</Dropdown.Item>
        <Dropdown.Item as="button">Descending</Dropdown.Item>
      </DropdownButton>
    </section>
  );
}
