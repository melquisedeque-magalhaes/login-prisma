import {
  Button, Flex, FormControl, FormLabel, Input, Stack, Text
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {

  async function handleGithubLogin(){
    await signIn('github')
  }

  async function handleGoogleLogin(){
    await signIn('google')
  }

  async function handleFacebookLogin(){
    await signIn('facebook')
  }

  return (
    <Flex h="100vh" w="100vw" align="center" justify="center" background="#fff">
      <FormControl borderRadius="10px" p="24px" w="100%" maxW="400px" background="#F5F5F5" flexDirection="column" justifyContent="space-between">
        
        <Text fontWeight="bold" fontSize="32px" as="h1" color="#7159c1" mb="8">Login</Text>
        
        <Stack spacing="4">
          <FormLabel color="#7159c1">E-mail</FormLabel>
          <Input placeholder='E-mail' />
        
          <FormLabel color="#7159c1">Senha</FormLabel>
          <Input placeholder='Senha' />
        </Stack>

        <Button type='submit' mt="8" background="#7159c1" color="#fff" w="100%" colorScheme="purple">Entrar</Button>

        <Stack spacing="4" mt="4">
          <Button onClick={handleGithubLogin} aria-label='github' leftIcon={<FaGithub size={24} />} color="#fff" background="#000" colorScheme="">Login com Github</Button>
          <Button onClick={handleGoogleLogin} aria-label='google' leftIcon={<FcGoogle size={24} />} color="rgba(0, 0, 0, 0.54);" background="#fff" boxShadow="0px 38.4869px 71.4756px rgba(0, 0, 0, 0.07)" colorScheme="">Continue com o Google</Button>
          <Button onClick={handleFacebookLogin} aria-label='facebook' leftIcon={<FaFacebook size={24} />} color="#fff" background="#1877F2"  colorScheme="">Continue com o Facebook</Button>
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