import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/Input";

interface SingInData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SingInData>;
  loading: boolean;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      as="form"
      onSubmit={handleSignIn}
      mt={["4", "4", "0"]}
      w={["100%", "100%", "40%"]}
      p="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bgColor="white"
      color="gray.900"
    >
      <Heading size={"lg"}>Bem vindo de volta!</Heading>
      <VStack mt="6" spacing={5}>
        <Box w="100%"></Box>
        <Input
          placeholder="Digite seu login"
          label="Login"
          icon={FaEnvelope}
          error={errors.email}
          {...register("email")}
        />
        {!errors.email && (
          <Text color="gray.300" align="left" w="100%">
            Exemplo: nome@email.com
          </Text>
        )}
        <Input
          placeholder="Digite sua senha"
          icon={FaLock}
          label="Senha"
          error={errors.password}
          type="password"
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bgColor="purple.800"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "purple.900",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta?</Text>
        <Button
          bgColor="gray.100"
          color="gray.400"
          h="60px"
          w="100%"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{
            background: "gray.200",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
