import React, { useEffect, useState } from 'react'

function ListEPIs() {
  const [episList, setEpisList] = useState([])

  useEffect(() => {
    const fetchEpis = async () => {
      try {
        const response = await fetch('/epis')
        const data = await response.json()
        setEpisList(data.epis)
      } catch (error) {
        console.error('Erro ao listar EPIs:', error)
      }
    }

    fetchEpis()
  }, [])

  return (
    <div className='list-epis'>
      <h1>Lista de EPIs</h1>
      {episList.length > 0 && (
        <ul>
          {episList.map((epi) => (
            <li key={epi.id}>
              <p>ID: {epi.id}</p>
              <p>Nome: {epi.nome}</p>
              <p>Quantidade: {epi.quantidade}</p>
              <p>Código: {epi.codigo}</p>
            </li>
          ))}
        </ul>
      )}
      {episList.length === 0 && <p>Nenhum EPI cadastrado.</p>}
    </div>
  )
}

export default ListEPIs
