import { Box, Container, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

export default function Home() {
  const title = `Hi, I'm Desmond.`
  const descriptionShort = 'NYC based full-stack software engineer and angel investor.'
  const descriptionLong = `I am a NYC based full-stack software engineer with a passion for building software, teams and businesses to improve the lives of others. I am currently building things over at`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descriptionShort} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Container maxW="container.lg" py="36">
          <Stack spacing="8" maxW="container.md">
            <Box w="12">
              <NextLink href="/">
                <Image src="/logo.png" alt={title} />
              </NextLink>
            </Box>
            <Heading size="xl" fontWeight="500">{title}</Heading>
            <Text fontSize={['18px', '18px', '18px', '24px']} lineHeight="2" fontWeight="400">
              {descriptionLong} <Link href="https://juno.care" target="_blank" color="#337ab7">Juno Medical</Link>.
            </Text>
          </Stack>

          <Stack my="20" spacing="6">
            <Flex gap="6">

              <Link href="https://github.com/desmondmorris" target="_blank">
                <AiFillGithub size="24" />
              </Link>

              <Link href="https://linkedin.com/in/desmondmorris" target="_blank">
                <AiFillLinkedin size="24" />
              </Link>

              <Link href="mailto:hi@desmondmorris.com" target="_blank">
                <AiFillMail size="24" />
              </Link>

            </Flex>
            <Text fontSize="sm">&copy; {new Date().getFullYear()} Desmond Morris</Text>

          </Stack>



        </Container>
      </main>
    </>
  )
}
