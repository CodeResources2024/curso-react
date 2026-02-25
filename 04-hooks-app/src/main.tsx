import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import { InstagromApp } from './useOptimistic/InstagromApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <InstagromApp />
  </StrictMode>,
)
