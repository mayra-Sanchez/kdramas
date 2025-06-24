import { useParams } from 'react-router-dom';
import reviews from '../../data/reviews';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) return <p>Drama no encontrado</p>;

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <div className="detail-img-container">
          <img src={review.image} alt={review.title} className="detail-img" />
          <span className="detail-badge">K-Drama</span>
        </div>

        <div className="detail-info">
          <div className="detail-header">
            <h1>{review.title}</h1>
            <div className="detail-meta">
              <div className="detail-meta-item">
                <strong>Géneros:</strong> {review.genres.join(', ')}
              </div>
              <div className="detail-meta-item">
                <strong>Duración:</strong> {review.duration}
              </div>
              <div className="detail-meta-item">
                <strong>Episodios:</strong> {review.episodes}
              </div>
            </div>
          </div>

          <div className="detail-description">{review.summary}</div>

          <div className="detail-section">
            <h2>🎬 Ficha técnica</h2>
            <div className="ficha-grid">
              <div className="ficha-item">
                <h3>🎥 Director</h3>
                <p>{review.director}</p>
              </div>
              <div className="ficha-item">
                <h3>📝 Guionista</h3>
                <p>{review.writer}</p>
              </div>
              <div className="ficha-item">
                <h3>⏱️ Duración</h3>
                <p>{review.duration}</p>
              </div>
              <div className="ficha-item">
                <h3>#️⃣ Episodios</h3>
                <p>{review.episodes}</p>
              </div>
            </div>
          </div>

          {review.cast?.length > 0 && (
            <div className="detail-section">
              <h2>🎭 Reparto</h2>
              <div className="reparto-grid">
                {review.cast.map((actor, i) => (
                  <div key={i} className="actor-card">
                    <div className="actor-card-img-container">
                      <img
                        src={actor.image}
                        alt={actor.name}
                        className="actor-card-img"
                      />
                    </div>
                    <h3>{actor.name}</h3>
                    <p>{actor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {review.platform && (
            <a
              href={review.platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ver"
            >
              Ver en {review.platform.name}
            </a>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
