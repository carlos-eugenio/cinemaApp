import React, {useState, useEffect} from 'react';
import {API_KEY} from '@env';

import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import iconRightGalleryImg from '../../assets/iconRightGallery.png';

import {
  Container,
  MoviesContainer,
  MoviesImage,
  MoviesList,
  Movies,
  MoviesTitle,
  MovieSelectionTitle,
  MoviesListContainer,
  TouchablePlayUnselectedMovie,
  BackgroundImageDarken,
  TopMenuMoviesSelection,
  MovieSelectionTouchable,
  Footer,
} from './styles';

interface MoviesInterface {
  id: string;
  title: string;
  poster_path: string;
}

const Home: React.FC = () => {
  const [moviesSelection, setMoviesSelection] = useState<MoviesInterface[]>([]);

  // const [selectedPage, setSelectedPage] = useState<string>('1');

  const [selectedMoviesSelection, setSelectedMoviesSelection] = useState<string>('now_playing');

  const [selectedTitleMoviesList, setSelectedTitleMoviesList] = useState<string>('');

  const navigation = useNavigation();

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const response = await api.get(`movie/${selectedMoviesSelection}?api_key=${API_KEY}&language=pt-BR&page=1`);
      // console.log(response.data.total_pages);
      // response = {"page: 1", results: [{},{},{}]}
      // selectedMovie(responseSearchPopularMovies.data.results-firstobject)
      setMoviesSelection(response.data.results);
      setSelectedTitleMoviesList('');
    }

    loadMovies();
  }, [selectedMoviesSelection]);

  return (
    <Container>
      <MoviesContainer>
        <TopMenuMoviesSelection>
          <MovieSelectionTouchable testID="now_playing" onPress={() => setSelectedMoviesSelection('now_playing') }>
            {selectedMoviesSelection === 'now_playing' ? (
              <MovieSelectionTitle style={{color: "#fff"}}>Lançamentos</MovieSelectionTitle>
            ): (
              <MovieSelectionTitle>Lançamentos</MovieSelectionTitle>
            )}
          </MovieSelectionTouchable>
          <MovieSelectionTouchable testID="popular" onPress={() => setSelectedMoviesSelection('popular') }>
            {selectedMoviesSelection === 'popular' ? (
              <MovieSelectionTitle style={{color: "#fff"}}>Populares</MovieSelectionTitle>
            ): (
              <MovieSelectionTitle>Populares</MovieSelectionTitle>
            )}
          </MovieSelectionTouchable>
          <MovieSelectionTouchable testID="top_rated" onPress={() => setSelectedMoviesSelection('top_rated') }>
            {selectedMoviesSelection === 'top_rated' ? (
              <MovieSelectionTitle style={{color: "#fff"}}>Melhor avaliados</MovieSelectionTitle>
            ): (
              <MovieSelectionTitle>Melhor avaliados</MovieSelectionTitle>
            )}
          </MovieSelectionTouchable>
          <MovieSelectionTouchable testID="upcoming" onPress={() => setSelectedMoviesSelection('upcoming') }>
            {selectedMoviesSelection === 'upcoming' ? (
              <MovieSelectionTitle style={{color: "#fff"}}>Esperados</MovieSelectionTitle>
            ): (
              <MovieSelectionTitle>Esperados</MovieSelectionTitle>
            )}
          </MovieSelectionTouchable>
        </TopMenuMoviesSelection>
        <MoviesListContainer>
          <MoviesList
            data={moviesSelection}
            keyExtractor={(item: MoviesInterface) => item.id}
            renderItem={({item}: {item: MoviesInterface}) => (
              <Movies testID="show-title-selected-movie" onPress={() => setSelectedTitleMoviesList(item.id) }>
                <MoviesImage source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}>
                  {selectedTitleMoviesList === item.id ? (
                    <BackgroundImageDarken>
                      <TouchablePlayUnselectedMovie
                        testID="navigate-to-movie" onPress={() => navigation.navigate('Movie', { movieId: item.id, })}>
                        <MaterialIcon size={50} name="play-circle-outline" color={'#fff'} />
                      </TouchablePlayUnselectedMovie>
                      <MoviesTitle> 
                        { item.title.length >= 23 ? (
                          `${item.title.substr(0, 23)}...`
                        ): (item.title) }
                      </MoviesTitle>
                    </BackgroundImageDarken>
                  ): null }
                </MoviesImage>
              </Movies>
            )}
          />
        </MoviesListContainer>
        <Footer />
      </MoviesContainer>
    </Container>
  );
};

export default Home;
