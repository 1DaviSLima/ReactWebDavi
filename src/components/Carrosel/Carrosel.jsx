import html_css_js_Slide from "../../assets/html_css_js_Slide.jpeg";
import react_jsx from "../../assets/react_jsx.webp";
import Mysql_Slide from "../../assets/Mysql_Slide.png";
import "../css_Components/carrosel.css";

function Carrosel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block item_img"
              src={html_css_js_Slide}
              alt="HTML, CSS e JavaScript"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block item_img"
              src={react_jsx}
              alt="react_jsx-img"
            />
          </div>

          <div className="carousel-item" item_img>
            <img className=" d-block item_img" src={Mysql_Slide} alt="MySQL" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </>
  );
}

export default Carrosel;
