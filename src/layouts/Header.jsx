import Menu from "../components/Menu/index";
import DaviReactLogo from "../assets/DaviReactLogo.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-base">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <Link to={"/"}>
              <img
                src={DaviReactLogo}
                alt="##Logomarca"
                className="header-img"
              />
            </Link>
          </div>
          <div className="col-2">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
