import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReviewCard from '../../components/ReviewCard';
import reviews from '../../data/reviews';
import '../../styles/Home.css';
import GenreFilter from '../../components/GenreFilter';

const Home = () => {
  // Estados para filtros y paginación
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(8);

  // Obtener todos los géneros únicos
  const allGenres = [...new Set(reviews.flatMap((r) => r.genres))];

  // Filtrar reviews cuando cambian los filtros
  useEffect(() => {
    let results = reviews;
    
    // Filtrar por género
    if (selectedGenre !== "Todos") {
      results = results.filter((r) => r.genres.includes(selectedGenre));
    }
    
    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter((r) => 
        r.title.toLowerCase().includes(query) ||
        (r.cast && r.cast.some(actor => actor.name.toLowerCase().includes(query)))
      );
    }
    
    setFilteredReviews(results);
    setCurrentPage(1); // Resetear a la primera página
  }, [selectedGenre, searchQuery]);

  // Calcular reviews para la página actual
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  // Cambiar página
  const paginate = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  // Generar números de página para mostrar
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - halfVisible);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <GenreFilter
          genres={allGenres}
          activeGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
          onSearch={setSearchQuery}
        />
        
        {/* Mostrar mensaje si no hay resultados */}
        {filteredReviews.length === 0 && (
          <div className="no-results">
            <p>No se encontraron dramas que coincidan con tu búsqueda.</p>
            <button 
              onClick={() => {
                setSelectedGenre("Todos");
                setSearchQuery("");
              }}
              className="reset-filters"
            >
              Reiniciar filtros
            </button>
          </div>
        )}

        <div className="reviews-grid">
          {currentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Paginación */}
        {filteredReviews.length > reviewsPerPage && (
          <div className="pagination-container">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              className="pagination-button"
            >
              &larr; Anterior
            </button>
            
            <div className="page-numbers">
              {getPageNumbers().map((number, index) => (
                number === '...' ? (
                  <span key={`ellipsis-${index}`} className="page-ellipsis">...</span>
                ) : (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`page-number ${currentPage === number ? 'active' : ''}`}
                  >
                    {number}
                  </button>
                )
              ))}
            </div>
            
            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Siguiente &rarr;
            </button>
          </div>
        )}

        {filteredReviews.length > 0 && (
          <div className="pagination-info">
            Mostrando {indexOfFirstReview + 1}-{Math.min(indexOfLastReview, filteredReviews.length)} de {filteredReviews.length} dramas
            {searchQuery && (
              <span className="search-term"> para "{searchQuery}"</span>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;