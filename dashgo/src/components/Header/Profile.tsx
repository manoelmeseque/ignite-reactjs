import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Manoel Meseque</Text>
                <Text color="gray.300" fontSize="small">manoel@teste.com</Text>
            </Box>
            <Avatar size="md" name="Manoel Meseque" />
        </Flex>
    )
}