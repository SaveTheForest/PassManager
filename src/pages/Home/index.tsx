import React, { useState } from "react";
import { View, Text } from "react-native";
import { Container, Input, Title } from "./styled";
import { TCardPassword } from "../../components/CardPassword/types";
import { FlatList } from "react-native";
import { CardPassword } from "../../components/CardPassword";

export default function Home() {
  const data: TCardPassword[] = [
    {
      name: "Amazon",
      user: "jhonatacbarros@email.com",
      password: "#eew12@_e2",
    },
    {
      name: "Google",
      user: "example@gmail.com",
      password: "p@ssw0rd123",
    },
    {
      name: "Facebook",
      user: "user1234@yahoo.com",
      password: "mysecretpassword",
    },
    {
      name: "Twitter",
      user: "twitteruser_789",
      password: "tweety@123",
    },
    {
      name: "Instagram",
      user: "insta_user",
      password: "insta@pass",
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  const separatorComponents = () => {
    return <View style={{ height: 1 }} />;
  };

  const emptyCardPassword = () => {
    return (
      <View>
        <Text>Ta faltando senha carai</Text>
      </View>
    );
  };

  const filteredData = data.filter((item) => {
    const lowercaseInput = searchInput.toLowerCase();
    const lowercaseName = item.name.toLowerCase();
    return lowercaseName.includes(lowercaseInput);
  });

  const handleInputChange = (input: string) => {
    setSearchInput(input);
  };

  return (
    <Container>
      <Title>Senhas</Title>
      <Input
        placeholder="Pesquisar senha..."
        value={searchInput}
        onChangeText={handleInputChange}
      />
      <FlatList
        ItemSeparatorComponent={separatorComponents}
        ListEmptyComponent={emptyCardPassword}
        data={filteredData}
        renderItem={(items) => (
          <CardPassword
            name={items.item.name}
            user={items.item.user}
            password={items.item.password}
          />
        )}
      />
    </Container>
  );
}
