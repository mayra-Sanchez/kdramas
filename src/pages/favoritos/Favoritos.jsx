import { useState } from 'react';
import useFavorites from "../../hooks/useFavorites";
import reviews from "../../data/reviews";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReviewCard from "../../components/ReviewCard";
import "../../styles/Favoritos.css";
import html2pdf from "html2pdf.js";

const Favoritos = () => {
  const { favorites } = useFavorites();
  const favReviews = reviews.filter((r) => favorites.includes(r.id));
  
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Puedes ajustar este número
  
  // Calcular páginas
  const totalPages = Math.ceil(favReviews.length / itemsPerPage);
  const paginatedReviews = favReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToPDF = () => {
    const element = document.getElementById("pdf-content");
    html2pdf().set({
      margin: 0.5,
      filename: "mis-favoritos-kdrama.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).from(element).save();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="home-title">💖 Mis Favoritos</h2>

        {favReviews.length > 0 && (
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <button className="btn-export" onClick={exportToPDF}>
              📄 Exportar lista a PDF
            </button>
          </div>
        )}

        {favReviews.length === 0 ? (
          <p style={{ textAlign: "center" }}>No has agregado favoritos aún.</p>
        ) : (
          <>
            <div id="pdf-content">
              <div className="reviews-grid">
                {paginatedReviews.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </div>
            </div>

            {/* Controles de paginación */}
            {totalPages > 1 && (
              <div className="pagination-controls">
                <button 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 1}
                  className="pagination-button"
                >
                  ◀ Anterior
                </button>
                
                <span className="page-indicator">
                  Página {currentPage} de {totalPages}
                </span>
                
                <button 
                  onClick={handleNextPage} 
                  disabled={currentPage === totalPages}
                  className="pagination-button"
                >
                  Siguiente ▶
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favoritos;