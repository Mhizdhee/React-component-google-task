import Avatar from "./Avatar";
import AppsCollectionIcon from "./AppsCollectionIcon";
import MenuItem from "./MenuItem";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <div className="MenuInfo">
          <MenuItem title={"Gmail"} />
          <MenuItem title={"Images"} />
        </div>

        <div className="MenuIcon">
          <div className="MenuIcon">
            <AppsCollectionIcon />
          </div>
          <div className="MenuIcon">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
