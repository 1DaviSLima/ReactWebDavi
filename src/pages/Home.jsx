import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ReactImg from "../assets/ReactImg.png";
import "./home.css"
function Home() {
  return (
    <>
      <section className="hero">
        <img src={ReactImg} alt="React" className="hero-img" />

        <div className="hero-content">
          <h1>Desenvolvedor Front-End</h1>

          <p>
            Crio aplicações modernas utilizando React, JavaScript e Bootstrap
            com foco em desempenho e experiência do usuário.
          </p>

          <div className="hero-buttons">
            <button><a href="https://github.com/1DaviSLima" className="hero-a">Ver Projetos</a></button>
            <button><a href="#" className="hero-a">Contato</a></button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
