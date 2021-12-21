import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'

export default function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth="1480px"
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />

            <SearchBox />

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile />
            </Flex>

        </Flex>
    )
}