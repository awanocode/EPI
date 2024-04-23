import React, { useEffect, useState } from 'react'

function ListColaboradores() {
  const [colaboradoresList, setColaboradoresList] = useState([])

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await fetch('/colaboradores/listar')
        const data = await response.json()
        setColaboradoresList(data.colaboradores)
      } catch (error) {
        console.error('Erro ao listar colaboradores:', error)
      }
    }

    fetchColaboradores()
  }, [])

  return (
    <div className='list-colaboradores'>
      <h1>Lista de Colaboradores</h1>
      {colaboradoresList.length > 0 && (
        <ul>
          {colaboradoresList.map((colaborador) => (
            <li key={colaborador.id}>
              <p>ID: {colaborador.id}</p>
              <p>Nome: {colaborador.nome}</p>
              <p>Cargo: {colaborador.cargo}</p>
              <p>Setor: {colaborador.setor}</p>
            </li>
          ))}
        </ul>
      )}
      {colaboradoresList.length === 0 && <p>Nenhum colaborador cadastrado.</p>}
    </div>
  )
}

export default ListColaboradores
