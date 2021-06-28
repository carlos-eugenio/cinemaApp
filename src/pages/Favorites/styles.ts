import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const MovieContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 350px;
  padding-top: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #C39800;
`;

export const MovieList = styled(
  FlatList as new () => FlatList<Movie>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
`;

export const Movie = styled.TouchableOpacity`
  background: #000;
  flex: 1;
  margin: 1px;
`;

export const MovieImage = styled.ImageBackground`
  flex: 1;
  height: 241px;
  width: 100%;
  align-self: center;
`;

export const BackgroundImageDarken = styled.View`
  width: 100%;
  height: 122px;
  background-color: 'rgba(0,0,0, 0.70)';
  margin-top: 122px;
`;

export const TitleFavoritesContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 10px;
`;

export const MovieTitle = styled.Text`
  align-self: center;
  color: #C39800;
  font-family: 'Anton-Regular';
  font-size: 16px;
  text-align: center;
`;

export const MovieFavorite = styled.TouchableOpacity`
  align-self: center;
`;

export const MovieTitleFavoritesContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoResults = styled.Text`
  align-self: center;
  font-size: 20px;
  color: #fff;
  font-family: 'Anton-Regular';
`;

export const NoResultsContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.View`
  justify-content: center;
  align-items: center;
`;
