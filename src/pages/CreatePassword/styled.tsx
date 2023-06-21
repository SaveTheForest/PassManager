import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  gap: 26px;
`;
export const GapView = styled.View`
  gap: 6px;
`;

export const TitleScreen = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: #545974;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #545974;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border-color: #929292;
  border-width: 0.5px;
  border-radius: 12px;
  padding-left: 20px;
  background-color: #fff;
`;
export const ButtonGeneratePassword = styled.TouchableOpacity`
  width: 160px;
  height: 40px;
  border-radius: 12px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  background-color: #fff;
  border-color: #f77d62;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  margin-top: 40%;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  background-color: #f77d62;
  border-color: #fff;
`;
