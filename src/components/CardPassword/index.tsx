import { View, Text } from "react-native";
import React from "react";
import { TCardPassword } from "./types";
import { Container, ContainerName, NameLetter } from "./styled";

export function CardPassword({ name, user, password }: TCardPassword) {
  return (
    <Container>
      <ContainerName>
        <NameLetter>{name.slice(0, 1)}</NameLetter>
      </ContainerName>
      <Text>{name}</Text>
    </Container>
  );
}
