import useWatchlist from "../../hooks/useWatchlist";
import reviews from "../../data/reviews";
import ReviewCard from "../../components/ReviewCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const QuieroVer = () => {
  const { watchlist } = useWatchlist();
  const quierover = reviews.filter((r) => watchlist.quieroVer.includes(r.id));

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="home-title">✅ Dramas que quieres ver</h2>
        <div className="reviews-grid">
          {quierover.length === 0 ? (
            <p>No has marcado ningún drama que quieras ver.</p>
          ) : (
            quierover.map((r) => <ReviewCard key={r.id} review={r} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuieroVer;
