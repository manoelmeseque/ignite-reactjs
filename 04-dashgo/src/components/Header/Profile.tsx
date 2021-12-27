import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProp{
    showProfileData?: boolean;
}

export function Profile({ showProfileData }:ProfileProp) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && <Box mr="4" textAlign="right">
                <Text>Manoel Meseque</Text>
                <Text color="gray.300" fontSize="small">manoel@teste.com</Text>
            </Box>}
            <Avatar size="md" name="Manoel Meseque" />
        </Flex>
    )
}