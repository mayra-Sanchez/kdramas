import { useEffect, useState } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('kdrama-favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('kdrama-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
