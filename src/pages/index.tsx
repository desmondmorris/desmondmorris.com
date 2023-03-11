import { Box, Container, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import NextLink from 'next/link'

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

export default function Home() {
  const title = `Hi, I'm Desmond.`
  const descriptionShort = 'NYC based full-stack software engineer'
  const descriptionLong = `I am a NYC based full-stack engineer with a passion for building products, teams and businesses that improve the lives of others. I am currently building things over at`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descriptionShort} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Container maxW="container.lg" py="36">
            <Stack spacing="8" maxW="container.md">
              <Box w="12">
                <NextLink href="/">
                  <Image src="/logo.png" alt={title} />
                </NextLink>
              </Box>
              <Heading size="xl" fontWeight="500">{title}</Heading>
              <Text fontSize={['18px', '18px', '18px', '24px']} lineHeight="2" fontWeight="400">
                {descriptionLong} <Link href="https://juno.care" target="_blank">Juno Medical</Link>.
              </Text>
            </Stack>

            <Stack my="20" spacing="6">
              <Flex gap="6">

                <Link href="https://github.com/desmondmorris" target="_blank" color="white">
                  <AiFillGithub size="24" />
                </Link>

                <Link href="https://linkedin.com/in/desmondmorris" target="_blank" color="white">
                  <AiFillLinkedin size="24" />
                </Link>

                <Link href="mailto:hi@desmondmorris.com" target="_blank" color="white">
                  <AiFillMail size="24" />
                </Link>

              </Flex>
              <Text fontSize="sm">&copy; {new Date().getFullYear()} Desmond Morris</Text>

            </Stack>

          </Container>
        </motion.div>
      </main>
    </>
  )
}
