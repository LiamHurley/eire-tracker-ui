import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PlayersTable from './components/OverallTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayersTable />
  </StrictMode>,
)
