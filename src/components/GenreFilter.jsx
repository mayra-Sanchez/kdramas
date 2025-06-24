import { useState, useRef } from 'react';
import '../styles/GenreFilter.css';

const GenreFilter = ({ genres, activeGenre, onSelectGenre, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const genreContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const scrollGenres = (direction) => {
    const container = genreContainerRef.current;
    const scrollAmount = 200;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    setTimeout(() => {
      updateArrowVisibility();
    }, 300);
  };

  const updateArrowVisibility = () => {
    const container = genreContainerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  const handleScroll = () => {
    updateArrowVisibility();
  };

  return (
    <div className="filter-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      
      <div className="genre-scroller">
        {showLeftArrow && (
          <button 
            className="scroll-button left" 
            onClick={() => scrollGenres('left')}
            aria-label="Desplazar izquierda"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        <div 
          className="genre-filter" 
          ref={genreContainerRef}
          onScroll={handleScroll}
        >
          <button
            className={activeGenre === "Todos" ? "active" : ""}
            onClick={() => onSelectGenre("Todos")}
          >
            Todos
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              className={activeGenre === genre ? "active" : ""}
              onClick={() => onSelectGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            className="scroll-button right" 
            onClick={() => scrollGenres('right')}
            aria-label="Desplazar derecha"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default GenreFilter;