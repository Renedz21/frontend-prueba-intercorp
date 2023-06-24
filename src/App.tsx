import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';


const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={'Cargando...'} >
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}

export default App