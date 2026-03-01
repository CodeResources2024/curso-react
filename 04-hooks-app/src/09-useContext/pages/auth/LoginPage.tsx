import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate();

  const handdleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {

    event.preventDefault();
    console.log({ userId })

    const result = login(+userId);
    if (!result) {
      toast.error('Usuario no encontrado');
      return;
    }

    navigation('/profile');
  }


  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Inicial Sesión</h1>
      <hr />
      <form className='flex flex-col gap-2 my-10'
        onSubmit={handdleSubmit}
      >
        <Input
          value={userId}
          onChange={event => setUserId(event.target.value)}
        />

        <Button
          type='submit'
        >
          Inciar Sesión
        </Button>
      </form>

      <Link to='/about'>
        <Button variant='ghost' className='' >Volver a Home</Button>
      </Link>
    </div>
  )
}
