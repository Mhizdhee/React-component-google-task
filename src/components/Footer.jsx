import Location from "./Location";
import BottomLeftMenu from  "./BottomLeftMenu";
import FooterText from "./FooterText";
import BottomRightMenu from "./BottomRightMenu";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="locatn-div">
        <Location />
      </div>
    <div className="footer-menu-div">
    <div className="menu-div">
      <BottomLeftMenu title={"About"} />
      <BottomLeftMenu title={"Advertising"} />
      <BottomLeftMenu title={"Business"} />
      <BottomLeftMenu title={"How Search works"} />

    </div>
    <div className="foot-txt-div">
    <FooterText/>
    </div>

    <div className="righ-menu-div">
      <BottomRightMenu title={"Privacy"} />
      <BottomRightMenu title={"Terms"} />
      <BottomRightMenu title={"Settings"} />

    </div>
    </div>

    
    </>
  )
}

export default Footer;