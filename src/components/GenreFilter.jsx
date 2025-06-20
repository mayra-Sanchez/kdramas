import '../styles/GenreFilter.css';

const GenreFilter = ({ genres, activeGenre, onSelectGenre }) => {
  return (
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
  );
};

export default GenreFilter;
