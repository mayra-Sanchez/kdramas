import useWatchlist from "../../hooks/useWatchlist";
import reviews from "../../data/reviews";
import ReviewCard from "../../components/ReviewCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EnEmision = () => {
  const { watchlist } = useWatchlist();
  const enemision = reviews.filter((r) => watchlist.enEmision.includes(r.id));

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="home-title">✅ Dramas que estas viendo</h2>
        <div className="reviews-grid">
          {enemision.length === 0 ? (
            <p>No has marcado ningún drama que estes viendo.</p>
          ) : (
            enemision.map((r) => <ReviewCard key={r.id} review={r} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnEmision;
