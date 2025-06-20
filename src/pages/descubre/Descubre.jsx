import { useState } from "react";
import reviews from "../../data/reviews";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Descubre.css";

const Descubre = () => {
  const [drama, setDrama] = useState(null);

  const elegirRandom = () => {
    const random = reviews[Math.floor(Math.random() * reviews.length)];
    setDrama(random);
  };

  return (
    <>
      <Navbar />
      <div className="descubre-container">
        <h2>🔮 ¿Qué K-Drama deberías ver hoy?</h2>
        <button className="btn-random" onClick={elegirRandom}>
          ¡Descúbrelo!
        </button>
        {drama && (
          <div className="resultado">
            <img src={drama.image} alt={drama.title} />
            <h3>{drama.title}</h3>
            <p>{drama.summary}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Descubre;
