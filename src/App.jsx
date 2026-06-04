import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";

function App() {
  return (
    <>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quem-somos" element={<QuemSomos/>}/>
          <Route path="*" element='<h1>Not Found</h1>'/>
        </Routes>
      </main>
    <Footer />
    </>
  )
}
export default App