import { Link } from "react-router-dom";
import "../menu.css";

function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link className="menu-a" to={"/"}>Home</Link></li>
                </ul>
                <ul>
                    <li><Link className="menu-a" to={"/quem-somos"}>Quem Somos</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Menu