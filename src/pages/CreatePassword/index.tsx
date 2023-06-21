import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Container,
  TitleScreen,
  Input,
  Title,
  GapView,
  ButtonGeneratePassword,
  ButtonConfirm,
} from "./styled";
import { generateRandomPassword } from "../../utils/randomPassword";

export default function CreatePassword() {
  const [password, setPassword] = useState<string>("");
  const generatePassword = () => {
    const randomPassword = generateRandomPassword;
    setPassword(randomPassword);
  };

  return (
    <Container>
      <TitleScreen>Nova Senha</TitleScreen>
      <GapView>
        <Title>Titulo</Title>
        <Input placeholder="Digite o titulo" />
      </GapView>
      <GapView>
        <Title>Usuario/E-mail</Title>
        <Input placeholder="Digite seu usuario ou e-mail" />
      </GapView>
      <GapView>
        <Title>Senha</Title>
        <Input
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Digite sua senha"
        />
      </GapView>
      <ButtonGeneratePassword onPress={generatePassword}>
        <Title style={{ color: "#f77d62" }}>Nova Senha</Title>
      </ButtonGeneratePassword>
      <ButtonConfirm>
        <Title style={{ color: "#fff", fontSize: 18 }}>Confirmar</Title>
      </ButtonConfirm>
    </Container>
  );
}
