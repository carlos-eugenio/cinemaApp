import styled from 'styled-components/native';
import {FlatList} from 'react-native';

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

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const MovieContainer = styled.View`
  flex: 1;
  width: 350px;
  margin-top: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #C39800;
`;

export const MovieList = styled(
  FlatList as new () => FlatList<Movie>,
).attrs({
  numColumns: 1,
})`
  flex: 1;
  width: 100%;
`;

export const MovieDetails = styled.View``;

export const MovieDescriptionContainer = styled.View`
  margin: 20px 0;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-family: 'Anton-Regular';
  text-align: center;
  font-size: 18px;
  margin: 20px 0px 2px 0px;
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #C39800;
`;

export const MovieDescription = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Light';
  text-align: left;
  font-size: 14px;
`;

export const MovieDirectors = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  text-align: center;
  font-size: 14px;
  padding-top: 20px;
`;

export const MovieStars = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  text-align: center;
  font-size: 14px;
`;

export const MovieRatingsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const MovieRatings = styled.Text`
  color: #C39800;
  font-family: 'RobotoCondensed-Regular';
  text-align: center;
  font-size: 14px;
  padding: 0 10px;
`;

export const MovieGenresContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const MovieGenres = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Bold';
  text-align: center;
  font-size: 14px;
  padding: 0 10px;
`;

export const PlayTrailerFavoritesContainer = styled.View`
  width: 350px;
  height: 210px;
`;

export const MovieImage = styled.ImageBackground`
  width: 350px;
  height: 210px;
`;

export const MovieTrailerContainerTouchable = styled.View`
  flex-direction: row;
  width: 100%;
  height: 65px;
  margin-top: 125px;
  align-self: flex-end;
  background-color: 'rgba(0,0,0, 0.70)';
`;

export const TouchablePlayMovieTrailer = styled.TouchableOpacity`
  padding: 10px 0 0 20px;
  align-self: flex-start;
`;

export const MoviePlayTrailerText = styled.Text`
  color: #C39800;
  font-family: 'Anton-Regular';
  text-align: left;
  font-size: 14px;
  padding: 17px 0 0 5px;
`;

export const AddRemoveFavoritesContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 65px;
  margin-top: 125px;
  background-color: 'rgba(0,0,0, 0.70)';
`;

export const TouchableAddRemoveFavorites = styled.TouchableOpacity`
  padding-top: 10px;
`;

export const TextAddRemoveFavorites = styled.Text`
  color: #C39800;
  font-family: 'Anton-Regular';
  text-align: left;
  font-size: 14px;
  padding: 18px 0 0 5px;
`;