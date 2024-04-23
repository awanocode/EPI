import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'; // Assuming the path is correct
import ListEPIs from './components/ListEPIs'; // Assuming the path is correct
import ListColaboradores from './components/ListColaboradores'; // Assuming the path is correct
import CadastroEPI from './components/CadastroEPI'; // Assuming the path is correct
import CadastroColaborador from './components/CadastroColaborador'; // Assuming the path is correct
import RemoverColaborador from './components/RemoverColaborador'; // Assuming the path is correct
import RemoverEPI from './components/RemoverEPI'; // Assuming the path is correct
import { cadastrarEPI, listarEPIs, removerEPI } from './controllers/episController';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/listar-epis',
    element: <ListEPIs />,
  },
  {
    path: '/listar-colaboradores',
    element: <ListColaboradores />,
  },
  {
    path: '/cadastrar-epi',
    element: <CadastroEPI />,
  },
  {
    path: '/cadastrar-colaborador',
    element: <CadastroColaborador />,
  },
  {
    path: '/remover-colaborador/:id', // Route for dynamic ID
    element: <RemoverColaborador />,
  },
  {
    path: '/remover-epi/:id', // Route for dynamic ID
    element: <RemoverEPI />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
