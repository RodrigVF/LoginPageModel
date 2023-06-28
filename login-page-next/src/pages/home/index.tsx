import { Button } from '@chakra-ui/react'
import { GetServerSideProps } from 'next';
import { FiGithub, FiLock, FiUser } from 'react-icons/fi';
import { signIn } from 'next-auth/react';

function Home() {
 return (
   <Button
   >Home</Button>
 )
}

export default Home;