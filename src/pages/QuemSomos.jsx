import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ReactImg from "../assets/ReactImg.png";
import html_css_js from "../assets/html_css_js_Slide.jpeg";
import biomeImg from "../assets/biomeImg.png";
import leftHookImg from "../assets/lefthookImg.jpg";
import Carrosel from "../components/Carrosel/Carrosel";
import "./quemsomos.css";

function QuemSomos() {
  return (
    <>
        <Carrosel />

<section className="quem-somos">

    <h2 className="titulo">Conheça mais sobre o Projeto</h2>

    <div className="cards-container">

        <div className="card">
            <img src={ReactImg} className="card-img-top" alt="ReactJS" />
            <div className="card-body">
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={html_css_js} className="card-img-top" alt="HTML CSS JS" />
            <div className="card-body">
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={biomeImg} className="card-img-top" alt="Biome" />
            <div className="card-body">
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={leftHookImg} className="card-img-top" alt="Lefthook" />
            <div className="card-body">
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>

    </div>

</section>
    </>
  );
}
export default QuemSomos;
