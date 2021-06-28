import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Movies {
  id: string;
  title: string;
  poster_path: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const MoviesContainer = styled.View`
  flex: 1;
  width: 350px;
  height: 100%;
  margin-top: 60px;
`;

export const MoviesListContainer = styled.View`
  flex: 1;
  padding-top: 1px;
`;

export const MoviesList = styled(
  FlatList as new () => FlatList<Movies>,
).attrs({
  numColumns: 3,
})`
  flex: 1;
`;

export const Movies = styled.TouchableOpacity`
  flex: 1;
  margin: 1px;
  height: 179px;
`;

export const MoviesImage = styled.ImageBackground`
  height: 179px;  
`;

export const BackgroundImageDarken = styled.View`
  height: 179px;
  background-color: 'rgba(0,0,0, 0.50)';
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const MoviesTitle = styled.Text`
  color: #fff;
  font-family: 'Anton-Regular';
  text-align: center;
  font-size: 15px;
`;

export const TouchablePlayUnselectedMovie = styled.TouchableOpacity`
  align-self: center;
`;

export const TopMenuMoviesSelection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0A0B18;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #C39800;
`;

export const MovieSelectionTouchable = styled.TouchableOpacity`
  align-self: center;
`;

export const MovieSelectionTitle = styled.Text`
  color: #c4c4c4;
  font-family: 'Anton-Regular';
  text-align: left;
  font-size: 14px;
  align-self: center;
  padding-top: 5px;
  padding-bottom: 8px;
`;

export const Footer = styled.View`
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