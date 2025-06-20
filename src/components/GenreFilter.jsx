import { useState } from 'react';
import '../styles/GenreFilter.css';

const GenreFilter = ({ genres, activeGenre, onSelectGenre, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
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
      
      <div className="genre-filter">
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
    </div>
  );
};

export default GenreFilter;