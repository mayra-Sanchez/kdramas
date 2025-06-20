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
        <img src={review.image} alt={review.title} className="detail-img" />
        <div className="detail-info">
          <h2>{review.title}</h2>
          <p><strong>Género:</strong> {review.genres.join(', ')}</p>
          <p>{review.summary}</p>

          {/* Ficha técnica */}
          <div className="ficha-tecnica">
            <h3>🎬 Ficha técnica</h3>
            <p><strong>Director:</strong> {review.director}</p>
            <p><strong>Guionista:</strong> {review.writer}</p>
            <p><strong>Episodios:</strong> {review.episodes}</p>
            <p><strong>Duración:</strong> {review.duration}</p>
          </div>

          {/* Reparto */}
          {review.cast?.length > 0 && (
            <div className="reparto">
              <h3>🎭 Reparto</h3>
              <div className="reparto-grid">
                {review.cast.map((actor, i) => (
                  <div key={i} className="actor-card">
                    <img src={actor.image} alt={actor.name} />
                    <p>{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plataforma para ver */}
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
