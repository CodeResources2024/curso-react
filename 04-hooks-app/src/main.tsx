import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProffesionalApp } from './09-useContext/ProffesionalApp'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/*
    <Suspense fallback={
      <div className='bg-gradient flex flex-col gap-4'>
        <h2 className="text-4xl font-thin text-white"> CARGANDO</h2>
      </div>
    }>

      <ClientInformation getUser={getUserAction(150)} />
    </Suspense> */}
    <ProffesionalApp />
  </StrictMode>,
)
