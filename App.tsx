import { StatusBar } from "react-native";
import { AuthRoutes } from "./src/routes/auth.routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <AuthRoutes />
    </>
  );
}
