import React, {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import useFavorites from '../../hooks/favorites';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  MovieContainer,
  MovieImage,
  MovieList,
  Movie,
  MovieTitle,
  TitleFavoritesContainer,
  MovieFavorite,
  BackgroundImageDarken,
  NoResults,
  NoResultsContainer,
  LoadingIndicator,
  MovieTitleFavoritesContainer,
} from './styles';

interface MovieInterface {
  id: string;
  title: string;
  poster_path: string;
}

const Favorites: React.FC = () => {
  const {favorites, loading, addRemoveFavorites} = useFavorites();

  const navigation = useNavigation();

  const handleAddRemoveFavorites = useCallback(
    (item: MovieInterface): void => {
      addRemoveFavorites(item);
    },
    [addRemoveFavorites],
  );

  return (
    <Container>
      <MovieContainer>
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size="large" color="#fff" />
          </LoadingIndicator>
        ) : favorites.length ? (
          <MovieList
            data={favorites}
            keyExtractor={(item: MovieInterface) => item.id}
            renderItem={({item}: {item: MovieInterface}) => (
              <Movie
                testID="navigate-to-movie"
                onPress={() =>
                  navigation.navigate('Movie', {
                    movieId: item.id,
                  })
                }>
                <MovieImage source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}>
                  <MovieTitleFavoritesContainer>
                    <BackgroundImageDarken>
                      <TitleFavoritesContainer>
                        <MovieFavorite
                          testID={`add-remove-favorite`}
                          onPress={() => handleAddRemoveFavorites(item)}>
                          <FeatherIcon size={36} name="star" color="#C39800" />
                        </MovieFavorite>
                        <MovieTitle>{item.title}</MovieTitle>
                      </TitleFavoritesContainer>
                    </BackgroundImageDarken>
                  </MovieTitleFavoritesContainer>
                </MovieImage>
              </Movie>
            )}
          />
        ) : (
          <NoResultsContainer>
            <FeatherIcon size={50} name="cloud-off" color="#fff" />
            <NoResults>Playlist favoritos está vazia!</NoResults>
          </NoResultsContainer>
        )}
      </MovieContainer>
    </Container>
  );
};

export default Favorites;
