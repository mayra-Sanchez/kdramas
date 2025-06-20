import { useEffect, useState } from "react";

const defaultLists = {
  visto: [],
  quieroVer: [],
  enEmision: [],
};

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : defaultLists;
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleInList = (listName, id) => {
    setWatchlist((prev) => {
      const alreadyIn = prev[listName].includes(id);
      const updatedList = alreadyIn
        ? prev[listName].filter((item) => item !== id)
        : [...prev[listName], id];

      return { ...prev, [listName]: updatedList };
    });
  };

  const isInList = (listName, id) => watchlist[listName].includes(id);

  return { watchlist, toggleInList, isInList };
};

export default useWatchlist;
