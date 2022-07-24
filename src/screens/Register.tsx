import { VStack } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation()

  const handleNewOrderRegister = () => {
    if (!patrimony || !description) {
      return Alert.alert("Registrar", "Preencha todos os campos");
    }
    setIsLoading(true);
    firestore()
      .collection("orders")
      .add({
        patrimony,
        description,
        status: "open",
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then((res) => {
        Alert.alert("Registrar", "Solicitaçao registrada com sucesso");
        navigation.goBack()
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
        return Alert.alert("Registrar", "Não foi possivel registrar o pedido");
      });
  };

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title={"Nova Solicitação"} />
      <Input placeholder="Numero do patrimonio" mt={4} onChangeText={setPatrimony} />
      <Input
        placeholder="Descriçao do problema"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
        onChangeText={setDescription}
      />
      <Button title="Cadastrar" mt={5} isLoading={isLoading} onPress={handleNewOrderRegister} />
    </VStack>
  );
};
