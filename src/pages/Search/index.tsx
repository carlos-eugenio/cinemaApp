import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {API_KEY} from '@env';

import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  MovieContainer,
  MovieImage,
  MovieList,
  Movie,
  MovieTitle,
  TouchableSelectedTitleContainer,
  BackgroundImageDarken,
  NoResults,
  NoResultsContainer,
  LoadingIndicator,
  MovieCategory,
  MovieYear,
} from './styles';

interface MovieInterface {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

interface RouteNavigation {
  [key: string]: any;
}

const Search: React.FC<RouteNavigation> = ({route}) => {
  const [movies, setMovie] = useState<MovieInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTitleMoviesList, setSelectedTitleMoviesList] = useState<string>('');

  const navigation = useNavigation();

  const {searchTitle} = route.params;

  useEffect(() => {
    async function loadMovie(): Promise<void> {
      if (searchTitle.length){
        const response = await api.get(`search/movie?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false&query=${searchTitle}`);
        setMovie(response.data.results);
        setLoading(false);
        setSelectedTitleMoviesList('');
      }
      setLoading(false);
      setSelectedTitleMoviesList('');
    }

    loadMovie();
  }, [searchTitle]);

  return (
    <Container>
      <MovieContainer>
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size="large" color="#fff" />
          </LoadingIndicator>
        ) : movies.length ? (
          <MovieList
            data={movies}
            keyExtractor={(item: MovieInterface) => item.id}
            renderItem={({item}: {item: MovieInterface}) => (
              <Movie testID="show-title-selected-movie" onPress={() => setSelectedTitleMoviesList(item.id) }>
                <MovieImage source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}>
                  {selectedTitleMoviesList === item.id ? (
                    <BackgroundImageDarken>
                      <TouchableSelectedTitleContainer testID="navigate-to-movie" onPress={() => navigation.navigate('Movie', { movieId: item.id, })}>
                        <MovieTitle>{item.title}</MovieTitle>
                        {/* <MovieCategory>Drama</MovieCategory> */}
                        <MovieYear>{item.release_date.substr(0, 4)}</MovieYear>
                      </TouchableSelectedTitleContainer>
                    </BackgroundImageDarken>
                  ): null }  
                </MovieImage>
              </Movie>
            )}
          />
        ) : (
          <NoResultsContainer>
            <FeatherIcon size={50} name="cloud-off" color="#fff" />
            <NoResults>Nenhum filme encontrado!</NoResults>
          </NoResultsContainer>
        )}
      </MovieContainer>
    </Container>
  );
};

export default Search;
