import { Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { SignupForm } from "./SignupForm";
import { SignupInfo } from "./SignupInfo";

interface SingUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export const Signup = () => {
  const [loading, setLoading] = useState(false);

  const sigUpnSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpData>({ resolver: yupResolver(sigUpnSchema) });

  const handleSignUp = (data: SingUpData) => {
    console.log(data);
  };

  return (
    <Flex
      align="center"
      p={["10px 15px", "10px 15px", "0px"]}
      h={["auto", "auto", "100vh"]}
      justify="center"
      color="white"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justify="center"
        direction={["column", "column", "row"]}
        align="center"
      >
        <SignupForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          loading={loading}
          register={register}
        />
      </Flex>
      <SignupInfo />
    </Flex>
  );
};
