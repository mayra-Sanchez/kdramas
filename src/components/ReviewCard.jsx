import useFavorites from '../hooks/useFavorites';
import useWatchlist from '../hooks/useWatchlist';
import '../styles/ReviewCard.css';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInList, toggleInList } = useWatchlist();

  return (
    <div className="review-card">
      <img src={review.image} alt={review.title} />
      <div className="card-body">
        <h3>{review.title}</h3>
        <p className="genre">{review.genres.join(", ")}</p>
        <p className="summary">{review.summary.slice(0, 100)}...</p>

        <div className="btn-group">
          <Link to={`/detalle/${review.id}`}>
            <button className="btn-detail">Ver más</button>
          </Link>
          <button
            className={`btn-fav ${isFavorite(review.id) ? "active" : ""}`}
            onClick={() => toggleFavorite(review.id)}
          >
            {isFavorite(review.id) ? "💖 Quitar" : "🤍 Favorito"}
          </button>
        </div>

        <div className="btn-group-lists">
          <button
            onClick={() => toggleInList("visto", review.id)}
            className={`btn-watch ${isInList("visto", review.id) ? "active" : ""}`}
          >
            ✅ Visto
          </button>
          <button
            onClick={() => toggleInList("quieroVer", review.id)}
            className={`btn-watch ${isInList("quieroVer", review.id) ? "active" : ""}`}
          >
            ⭐ Quiero ver
          </button>
          <button
            onClick={() => toggleInList("enEmision", review.id)}
            className={`btn-watch ${isInList("enEmision", review.id) ? "active" : ""}`}
          >
            🔴 En emisión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
