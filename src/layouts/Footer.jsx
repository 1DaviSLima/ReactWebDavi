import "../components/css_Components/menu.css";
import "./footer.css";
function Footer() {
  return (
    <footer className="style-Footer">
      <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Davi React</h3>
                    <button className="menu-a mt-1"><a href="https://github.com/1DaviSLima" className="link-Style">GitHub</a></button>                          
                    <p className="text-end">© 2026 Davi React</p>
                </div>
            </div>
        </div>
    </footer>
  );
}
export default Footer;
