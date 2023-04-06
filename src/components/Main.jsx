import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import LanguageLink from "./LanguageLink";
import "../styles/main.css";

const Main = () => {
  return (
    <>
      <div className="main-div">
        <div className="main-div-img">
          <Logo />
        </div>
      </div>

      <div className="search-div">
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="btn">
        <Button title={"Google Search"} />
        <Button title={"I'm Feeling Lucky"} />
      </div>
      </div>
      <div className="lang-div">
      <LanguageLink />
      </div>
    </>
  );
};

export default Main;
