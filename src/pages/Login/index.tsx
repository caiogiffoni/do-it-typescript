import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.svg";
import { Input } from "../../components/Form/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface SingInData {
  email: string;
  password: string;
}

export const Login = () => {
  const signInSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: SingInData) => console.log(data);

  return (
    <Flex
      align="center"
      p="10px 15px"
      h="100vh"
      color="white"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
    >
      <Flex w="100%" justify="center" direction="row" align="center">
        <Grid w="100%" pr="100px">
          <Image src={LogoSecondary} alt="doit" boxSize="120px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            Flexível e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          onSubmit={handleSubmit(handleSignIn)}
          mt="4"
          w="50%"
          p="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bgColor="white"
          color="gray.900"
        >
          <Heading size={"lg"}>Bem vindo de volta!</Heading>
          <VStack mt="6" spacing={5}>
            <Input
              placeholder="Digite seu login"
              label="Login"
              icon={FaEnvelope}
              type="email"
              error={errors.email}
              {...register("email")}
            />
            <Input
              placeholder="Digite sua senha"
              icon={FaLock}
              error={errors.password}
              type="password"
              {...register("password")}
            />
          </VStack>
          <Button type="submit">Entrar</Button>
        </Grid>
      </Flex>
    </Flex>
  );
};
