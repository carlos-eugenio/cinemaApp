import styled from 'styled-components/native';

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background: #0A0B18;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

export const LogoImageContainer = styled.TouchableOpacity`
  justify-content: flex-start;
`;

export const LogoImage = styled.Image`
  width: 106px;
  height: 26px;
`;

export const SearchFavoritesContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export const SearchInput = styled.TextInput`
  font-family: 'RobotoCondensed-Regular';
  max-width: 100px;
  color: #C39800;
  font-size: 12px;
  padding: 0 10px 0 5px;
  line-height: 13px;
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const ButtonFavorites = styled.TouchableOpacity``;

export const ButtonGoBack = styled.TouchableOpacity``;
