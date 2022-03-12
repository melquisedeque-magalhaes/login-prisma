import {
  Button, Flex, FormControl, FormLabel, IconButton, Input, Stack, Text
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'

export default function SignIn() {

  async function handleGithubLogin(){
    await signIn('github')
  }

  return (
    <Flex h="100vh" w="100vw" align="center" justify="center" background="#ccc">
      <FormControl borderRadius="10px" p="24px" w="100%" maxW="400px" background="#fff" flexDirection="column" justifyContent="space-between">
        
        <Text fontWeight="bold" fontSize="32px" as="h1" color="#7159c1" mb="8">Login</Text>
        
        <Stack spacing="4">
          <FormLabel color="#7159c1">E-mail</FormLabel>
          <Input placeholder='E-mail' />
        
          <FormLabel color="#7159c1">Senha</FormLabel>
          <Input placeholder='Senha' />
        </Stack>

        <Button type='submit' mt="8" background="#7159c1" color="#fff" w="100%" colorScheme="purple">Entrar</Button>

        <Stack spacing="4" mt="4">
          <IconButton onClick={handleGithubLogin} aria-label='github' icon={<FaGithub size={24} />} color="#fff" background="#000" colorScheme="" />
        </Stack>
      </FormControl>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if(session){
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}