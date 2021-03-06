import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from '../../components/Header'
import Pagination from "../../components/Pagination";
import SideBar from '../../components/SideBar'
import { useQuery } from 'react-query'

export default function UserList() {

    const query = useQuery('users', async () => {
        const response = await fetch("http://localhost:3000/api/users")
        const data = await response.json()

        return data
    })

    console.log(query)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    useEffect(() => {
        
    }, [])


    return (
        <Box>
           <Header />
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar /> 
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table>
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Manoel Silva</Text>
                                        <Text fontSize="sm" color="gray.300">manoel.silva@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>12 de dezembro, 2021</Td>}
                                <Td>

                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && "Editar"}
                                    </Button>

                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>

        </Box>
    )
}