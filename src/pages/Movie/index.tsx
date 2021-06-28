import React, {useState, useCallback, useEffect} from 'react';
import {API_KEY} from '@env';

import api from '../../services/api';

import useFavorites from '../../hooks/favorites';

import FeatherIcon from 'react-native-vector-icons/Feather';

import iconRightGalleryImg from '../../assets/iconRightGallery.png';

import {
  Container,
  MovieContainer,
  MovieList,
  MovieTitle,
  PlayTrailerFavoritesContainer,
  MovieImage,
  TouchablePlayMovieTrailer,
  MovieTrailerContainerTouchable,
  MoviePlayTrailerText,
  MovieDetails,
  MovieDescriptionContainer,
  MovieDescription,
  MovieDirectors,
  MovieRatings,
  MovieStars,
  MovieRatingsContainer,
  MovieGenresContainer,
  MovieGenres,
  AddRemoveFavoritesContainer,
  TouchableAddRemoveFavorites,
  TextAddRemoveFavorites,
} from './styles';

interface MovieInterface {
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

interface RouteNavigation {
  [key: string]: any;
}

const Movie: React.FC<RouteNavigation> = ({route}) => {
  const {favorites, addRemoveFavorites} = useFavorites();
  const [movie, setMovie] = useState<MovieInterface[]>([]);

  const {movieId} = route.params;

  useEffect(() => {
    async function loadMovie(): Promise<void> {
      const response = await api.get(`movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
      setMovie([response.data]);
    }

    loadMovie();
  }, [movieId]);

  const handleAddRemoveFavorites = useCallback(
    (item: MovieInterface): void => {
      addRemoveFavorites(item);
    },
    [addRemoveFavorites],
  );

  return (
    <Container>
      <MovieContainer>
        <MovieList
          data={movie}
          keyExtractor={(item: MovieInterface) => item.id}
          renderItem={({item}: {item: MovieInterface}) => (
            <MovieDetails>
              <MovieTitle>{item.title}</MovieTitle>
              <PlayTrailerFavoritesContainer>
                <MovieImage source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}>
                  <AddRemoveFavoritesContainer>
                    <TouchableAddRemoveFavorites testID="add-remove-favorites" onPress={() => handleAddRemoveFavorites(item)}>
                      <FeatherIcon 
                        size={40} 
                        name="star" 
                        color={
                          favorites.find(p => p.id === item.id)
                            ? '#BD9F00'
                            : '#6a6a6a'
                        } 
                      />
                    </TouchableAddRemoveFavorites>
                    { favorites.find(p => p.id === item.id) ? (
                      <TextAddRemoveFavorites style={{color: "#C39800"}}>Remover dos favoritos</TextAddRemoveFavorites>
                    ) : (
                      <TextAddRemoveFavorites style={{color: "#6a6a6a"}}>Adicionar aos favoritos</TextAddRemoveFavorites>
                    )}
                  </AddRemoveFavoritesContainer>
                  {/* <MovieTrailerContainerTouchable>
                    <TouchablePlayMovieTrailer testID="navigate-to-movie" onPress={() => console.log(item.id) }>
                      <MaterialIcon size={40} name="play-circle-outline" color={'#C39800'} />
                    </TouchablePlayMovieTrailer>
                    <MoviePlayTrailerText>Assistir Trailer</MoviePlayTrailerText>
                  </MovieTrailerContainerTouchable> */}
                </MovieImage>
              </PlayTrailerFavoritesContainer>
              <MovieDescriptionContainer>
                <MovieDescription>{item.overview}</MovieDescription>
                <MovieGenresContainer>
                  { item.genres[0] ? (
                    <MovieGenres>{item.genres[0].name}</MovieGenres>
                  ): null }                  
                  { item.genres[1] ? (
                    <MovieGenres>{item.genres[1].name}</MovieGenres>
                  ): null } 
                  { item.genres[2] ? (
                    <MovieGenres>{item.genres[2].name}</MovieGenres>
                  ): null } 
                  <MovieGenres>Ano: {item.release_date.substr(0, 4)}</MovieGenres>
                </MovieGenresContainer>
                <MovieRatingsContainer>                  
                  <MovieRatings>Nota: {item.vote_average}</MovieRatings>
                  <MovieRatings>Popularidade: {Math.round(item.popularity)}</MovieRatings>
                  <MovieRatings>Votos: {item.vote_count}</MovieRatings>
                </MovieRatingsContainer>
              </MovieDescriptionContainer>
            </MovieDetails>
          )}
        />
      </MovieContainer>
    </Container>
  );
};

export default Movie;
