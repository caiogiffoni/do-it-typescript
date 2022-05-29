import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { useEffect, useState, useCallback, useRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

export const Input = ({
  name,
  error = null,
  icon,
  label,
  ...rest
}: InputProps) => {
  const [variation, setVariation] = useState("default");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error) setVariation("error");
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) setVariation("focus");
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (inputRef.current?.value && !error) setVariation("filled");
  }, [error]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDirection={"column"}>
        {icon && (
          <InputLeftElement mt="2.5" color={inputVariation[variation]}>
            <Icon as={icon} />
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          bgColor="gray.50"
          variant="outline"
          _hover={{ bgColor: "gray.10" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
