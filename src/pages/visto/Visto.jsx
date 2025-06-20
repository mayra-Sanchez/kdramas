import useWatchlist from "../../hooks/useWatchlist";
import reviews from "../../data/reviews";
import ReviewCard from "../../components/ReviewCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Visto = () => {
  const { watchlist } = useWatchlist();
  const vistos = reviews.filter((r) => watchlist.visto.includes(r.id));

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="home-title">✅ Dramas que ya viste</h2>
        <div className="reviews-grid">
          {vistos.length === 0 ? (
            <p>No has marcado ningún drama como visto.</p>
          ) : (
            vistos.map((r) => <ReviewCard key={r.id} review={r} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Visto;
