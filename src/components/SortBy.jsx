import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function SortArticles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSeachQuery] = useState(searchParams.get("created_at"));

  const handleSortBy = (selectedOption) => {
    setSearchParams({ sort_by: selectedOption });
    setSeachQuery(selectedOption)
    navigate(`/?sort_by=${encodeURIComponent(selectedOption)}`);
  };

  return (
    <section className="filter-toolbar">
      <DropdownButton
        title="Sort by"
        id="sort-by-button"
        onSelect={handleSortBy}
      >
        <Dropdown.Item as="button" eventKey="created_at">Date</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="comment_count">Comment count</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="votes">Votes</Dropdown.Item>
      </DropdownButton>

      <DropdownButton title="Order by" id="order-by-button">
        <Dropdown.Item as="button">Ascending</Dropdown.Item>
        <Dropdown.Item as="button">Descending</Dropdown.Item>
      </DropdownButton>
    </section>
  );
}
