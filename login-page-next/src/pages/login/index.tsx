import { Button } from '@chakra-ui/react'
import { GetServerSideProps } from 'next';
import { FiGithub, FiLock, FiUser } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { getSession, signIn } from 'next-auth/react';

function Login() {
 return (
  <div>
   <Button
   backgroundColor="gray.600"
   leftIcon={<FiGithub />}
   _hover={{ backgroundColor: "gray.700"}}
   onClick={() => signIn('github')}
   >Login</Button>

   <Button
   backgroundColor="blue.600"
   leftIcon={<FaDiscord />}
   _hover={{ backgroundColor: "bluey.700"}}
   onClick={() => signIn('discord')}
   >Login</Button>
   </div>
 )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 const session = await getSession(context);

 console.log(session)

 if(session) {
  return {
   redirect: {
    destination: '/home',
    permanent: false
   }
  }
 }

 return {
  props: {
   session
  }
 }
}

export default Login;