import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'



type createUserFormData = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mai inválido"),
    password: yup.string().required("Senha obrigatória").min(6, "A senha precisa ter no minimo 6 caracteres"),
    confirm_password: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser = (values) => {
        console.log(values)
    }


    return (
        <Box>
           <Header />
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar /> 
                
                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">
                            <Input
                                name="name"
                                label="Name Completo"
                                error={formState.errors.name}
                                {...register('name')}
                            />
                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                error={formState.errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">
                            <Input
                                name="password"
                                type="password"
                                error={formState.errors.password}
                                label="Senha"
                                {...register('password')}
                            />
                            <Input
                                name="confirm_password"
                                type="password"
                                label="Confirmação de senha"
                                error={formState.errors.confirm_password}
                                {...register('confirm_password')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">

                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>

                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}