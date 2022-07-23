import { VStack } from "native-base";
import React from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const Register = () => {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title={"Nova Solicitação"} />
      <Input placeholder="Numero do patrimonio" mt={4} />
      <Input
        placeholder="Descriçao do problema"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
      />
      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
};
