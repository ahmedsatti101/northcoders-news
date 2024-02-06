import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SidebarNav() {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/" />}> Home </MenuItem>
          <MenuItem> Search </MenuItem>
          <MenuItem> Bookmarks </MenuItem>
          <MenuItem>
            Post
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
