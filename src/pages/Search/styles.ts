import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const MovieContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 355px;
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
  height: 241px;
  width: 100%;
  overflow: hidden;
  align-self: center;
`;

export const BackgroundImageDarken = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: 'rgba(0,0,0, 0.50)';
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TouchableSelectedTitleContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-family: 'Anton-Regular';
  font-size: 18px;
  text-align: center;
`;

export const MovieCategory = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Anton-Regular';
  text-align: center;
`;

export const MovieYear = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Anton-Regular';
  text-align: center;
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
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #0A0B18;
  width: 100%;
  border-top-width: 1px;
  border-top-color: #C39800;
`;

export const PageTouchable = styled.TouchableOpacity`
  align-self: center;
`;

export const PageText = styled.Text`
  color: #c4c4c4;
  font-family: 'Anton-Regular';
  text-align: left;
  font-size: 16px;
  align-self: center;
  padding: 5px 8px 8px 8px;
`;