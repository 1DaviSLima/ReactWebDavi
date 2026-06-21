import "../components/css_Components/menu.css";
function Footer() {
  const style = {
    color: "white",
    backgroundColor: "rgb(25, 54, 79)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    height: "200px",
    justifyContent: "center",
  };
  const linkStyle = {
  textDecoration: "none",
  color: "white",
};

  return (
    <footer style={style}>

        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Davi React</h3>
                    <button className="menu-a mt-1"><a href="https://github.com/1DaviSLima" style={linkStyle}>GitHub</a> </button>                          
                    <p className="text-end">© 2026 Davi React</p>
                </div>
            </div>
        </div>
    </footer>
  );
}
export default Footer;
