import {useState, useCallback, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  [genres: string]: any;
}

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites(): Promise<void> {
      const storagedFavorites = await AsyncStorage.getItem(
        '@CinemaApp:favorites',
      );

      if (storagedFavorites) {
        setFavorites([...JSON.parse(storagedFavorites)]);
      }
      setLoading(false);
    }

    loadFavorites();
  }, []);

  const addRemoveFavorites = useCallback(
    async movie => {
      const movieExists = favorites.find(p => p.id === movie.id);

      if (!movieExists) {
        const newFavorites = [...favorites, {...movie}];
        await AsyncStorage.setItem(
          '@CinemaApp:favorites',
          JSON.stringify(newFavorites),
        );
        setFavorites(newFavorites);
      } else {
        const newFavorites = favorites.filter(p => p.id !== movie.id);
        await AsyncStorage.setItem(
          '@CinemaApp:favorites',
          JSON.stringify(newFavorites),
        );
        setFavorites(newFavorites);
      }
    },
    [favorites],
  );
  return {favorites, loading, addRemoveFavorites};
};

export default useFavorites;
