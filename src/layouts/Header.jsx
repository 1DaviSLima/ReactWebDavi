import Menu from "../components/Menu/index";
import DaviReactLogo from "../assets/DaviReactLogo.png";
import "./header.css";
function Header() {
    
    return (
        <header className="header-base">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <img src={DaviReactLogo} alt="##Logomarca" className="header-img"/>
                    </div>
                    <div className="col-2">
                        <Menu/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header