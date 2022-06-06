import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const { SignOut } = useAuth();
  return <Button onClick={SignOut}>Deslogar</Button>;
};
