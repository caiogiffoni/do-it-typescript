import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";

interface SingUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

interface SingUpFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SingUpData>;
  loading: boolean;
}

export const SignupForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: SingUpFormProps) => {
  return (
    <Grid
      as="form"
      onSubmit={handleSignUp}
      mt={["4", "4", "0"]}
      w={["100%", "100%", "50%", "50%"]}
      p="30px 25px"
      border="3px solid"
      borderColor="gray.100"
      bgColor="white"
      color="gray.900"
    >
      <Heading size={"lg"}>Crie sua conta</Heading>
      <VStack mt="6" spacing={5}>
        <Box w="100%"></Box>
        <Input
          placeholder="Digite seu nome"
          label="Nome"
          icon={FaUser}
          error={errors.name}
          {...register("name")}
        />
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
        <Input
          placeholder="Confirme sua senha"
          icon={FaLock}
          label="Confiamação de senha"
          error={errors.confirm_password}
          type="password"
          {...register("confirm_password")}
        />
      </VStack>
      <Button
        mt="4"
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
        Finalizar Cadastro
      </Button>
    </Grid>
  );
};
