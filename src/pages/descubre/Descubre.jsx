import { useState, useEffect } from "react";
import reviews from "../../data/reviews";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Descubre.css";
import useFavorites from "../../hooks/useFavorites";
import useWatchlist from "../../hooks/useWatchlist";

const Descubre = () => {
  const [drama, setDrama] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInList, toggleInList } = useWatchlist();
  const [selectedStatus, setSelectedStatus] = useState(null);

  const elegirRandom = () => {
    setIsLoading(true);
    setSelectedStatus(null); // Resetear estado al buscar nuevo drama
    setTimeout(() => {
      const random = reviews[Math.floor(Math.random() * reviews.length)];
      setDrama(random);
      setIsLoading(false);
    }, 500);
  };

  const handleStatusChange = (status) => {
    toggleInList(status, drama.id);
    setSelectedStatus(isInList(status, drama.id) ? null : status);
  };

  // Verificar el estado actual cuando cambia el drama
  useEffect(() => {
    if (drama) {
      const statuses = ['visto', 'quieroVer', 'enEmision'];
      const currentStatus = statuses.find(status => isInList(status, drama.id));
      setSelectedStatus(currentStatus || null);
    }
  }, [drama, isInList]);

  return (
    <>
      <Navbar />
      <div className="descubre-container">
        <div className="descubre-header">
          <h2>🔮 ¿Qué K-Drama deberías ver hoy?</h2>
          <p className="subtitle">Deja que el destino elija por ti</p>
        </div>
        
        <button 
          className="btn-random" 
          onClick={elegirRandom}
          disabled={isLoading}
        >
          {isLoading ? 'Buscando...' : '¡Descúbrelo!'}
        </button>

        {drama && (
          <div className={`resultado ${isLoading ? 'loading' : ''}`}>
            <div className="card-image-container">
              <img src={drama.image} alt={`Poster de ${drama.title}`} />
              {/* <div className="card-badge">{drama.rating || 'N/A'}</div> */}
            </div>
            
            <div className="card-content">
              <h3>{drama.title}</h3>
              <p className="card-year">{drama.year}</p>
              <p className="genre">{drama.genres.join(" · ")}</p>
              <p className="summary">{drama.summary}</p>
              
              <div className="card-actions">
                <button
                  className={`btn-icon ${isFavorite(drama.id) ? "active" : ""}`}
                  onClick={() => toggleFavorite(drama.id)}
                >
                  {isFavorite(drama.id) ? "❤️ Favorito" : "🤍 Favorito"}
                </button>
                
                <div className="watch-status-buttons">
                  <button
                    onClick={() => handleStatusChange('visto')}
                    className={`status-btn ${selectedStatus === 'visto' ? "active" : ""}`}
                  >
                    ✅ Visto {selectedStatus === 'visto'}
                  </button>
                  <button
                    onClick={() => handleStatusChange('quieroVer')}
                    className={`status-btn ${selectedStatus === 'quieroVer' ? "active" : ""}`}
                  >
                    ⭐ Quiero ver {selectedStatus === 'quieroVer'}
                  </button>
                  <button
                    onClick={() => handleStatusChange('enEmision')}
                    className={`status-btn ${selectedStatus === 'enEmision' ? "active" : ""}`}
                  >
                    🔴 En emisión {selectedStatus === 'enEmision'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!drama && (
          <div className="empty-state">
            <p>Presiona el botón para descubrir tu próximo drama coreano</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Descubre;