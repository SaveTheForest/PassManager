import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TCardPassword } from "./types";
import { Container, ContainerName, NameLetter } from "./styled";
import { Feather } from "@expo/vector-icons";
export function CardPassword({ name, user, password }: TCardPassword) {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  return (
    <Container>
      <View
        style={{
          alignItems: "center",
          gap: 12,
          flexDirection: "row",
        }}
      >
        <ContainerName>
          <NameLetter>{name.slice(0, 1)}</NameLetter>
        </ContainerName>
        <View>
          <Text>{isShowing ? user : name}</Text>
          <Text>{isShowing ? password : "**********"}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => setIsShowing(!isShowing)}>
        <Feather
          name={isShowing ? "eye-off" : "eye"}
          size={28}
          color="#323232"
        />
      </TouchableOpacity>
    </Container>
  );
}
