import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUSer] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUSer(response);
      setIsLoading(false);
    });
    return subscriber;
  }, []);

  if(isLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
     {user ? <AppRoutes/> : <SignIn />}
    </NavigationContainer>
  );
};
