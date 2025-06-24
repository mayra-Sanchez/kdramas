import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import reviews from "../../data/reviews";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Calendario.css";

const Calendario = () => {
  const [value, setValue] = useState(new Date());

  const getDramasForDate = (date) => {
    const target = date.toISOString().split("T")[0];
    return reviews.filter(
      (r) => r.releaseDate && r.releaseDate.startsWith(target)
    );
  };

  return (
    <>
      <Navbar />
      <div className="calendar-page-container">
        <div className="calendar-wrapper">
          <h2>📅 Calendario de estrenos K-Drama</h2>
          <div className="calendar-container">
            <Calendar 
              onChange={setValue} 
              value={value}
              locale="es-ES" // Opcional: para español
            />
          </div>

          <div className="estrenos">
            <h3>Dramas que estrenan el {value.toLocaleDateString('es-ES')}</h3>
            <div className="dramas-grid">
              {getDramasForDate(value).length === 0 ? (
                <p>No hay estrenos en esta fecha.</p>
              ) : (
                getDramasForDate(value).map((r) => (
                  <div key={r.id} className="drama-item">
                    <img src={r.image} alt={r.title} />
                    <p>{r.title}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calendario;