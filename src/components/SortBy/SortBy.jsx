import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import './SortBy.css'

export default function SortArticles({ setSortBy, setOrder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSeachQuery] = useState(searchParams.get("created_by"));
  const [orderQuery, setOrderQuery] = useState(searchParams.get("desc"));

  const handleSortBy = (selectedOption) => {
    setSearchParams({ sort_by: selectedOption });
    setSeachQuery(selectedOption);
    setSortBy(selectedOption);
    navigate(`/?sort_by=${encodeURIComponent(selectedOption)}`);
  };

  const handleOrder = (selectedOption) => {
    setSearchParams({ order: selectedOption });
    setOrderQuery(selectedOption);
    setOrder(selectedOption);
    navigate(`/?order=${encodeURIComponent(selectedOption)}`);
  };

  return (
    <section className="filter-toolbar">
      <DropdownButton
        title="Sort by"
        id="sort-by-button"
        onSelect={handleSortBy}
      >
        <Dropdown.Item as="button" eventKey="created_at">
          Date
        </Dropdown.Item>
        <Dropdown.Item as="button" eventKey="votes">
          Votes
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        title="Order by"
        id="order-by-button"
        onSelect={handleOrder}
      >
        <Dropdown.Item as="button" eventKey="asc">
          Ascending
        </Dropdown.Item>
        <Dropdown.Item as="button" eventKey="desc">
          Descending
        </Dropdown.Item>
      </DropdownButton>
    </section>
  );
}
