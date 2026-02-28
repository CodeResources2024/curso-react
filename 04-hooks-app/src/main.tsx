import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.actions'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <Suspense fallback={
      <div className='bg-gradient flex flex-col gap-4'>
        <h2 className="text-4xl font-thin text-white"> CARGANDO</h2>
      </div>
    }>

      <ClientInformation getUser={getUserAction(150)} />
    </Suspense>
  </StrictMode>,
)
