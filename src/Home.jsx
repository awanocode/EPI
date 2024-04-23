import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [episList, setEpisList] = useState([])
  const [colaboradoresList, setColaboradoresList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEPIs = await fetch('/epis')
        const dataEPIs = await responseEPIs.json()
        setEpisList(dataEPIs.epis)

        const responseColaboradores = await fetch('/colaboradores/listar')
        const dataColaboradores = await responseColaboradores.json()
        setColaboradoresList(dataColaboradores.colaboradores)
      } catch (error) {
        console.error('Erro ao listar dados:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array to fetch data only once on component mount

  return (
    <div className='home'>
      <h1>Novo Projeto - Home</h1>
      <button onClick={() => fetchData()}>Atualizar Listas</button>
      {episList.length > 0 && (
        <div className='epis-list'>
          <h2>EPIs Cadastrados</h2>
          {episList.map((epi) => (
            <p key={epi.id}>
              ID: {epi.id}, Nome: {epi.nome}, Quantidade: {epi.quantidade},
              Código: {epi.codigo}
            </p>
          ))}
        </div>
      )}
      {colaboradoresList.length > 0 && (
        <div className='colaboradores-list'>
          <h2>Colaboradores Cadastrados</h2>
          {colaboradoresList.map((colaborador) => (
            <p key={colaborador.id}>
              ID: {colaborador.id}, Nome: {colaborador.nome}, Cargo:{' '}
              {colaborador.cargo}, Setor: {colaborador.setor}
            </p>
          ))}
        </div>
      )}
      <Link to='/cadastrar-epi'>Cadastro de EPIs</Link>
      <Link to='/cadastrar-colaborador'>Cadastro de Colaborador</Link>
      <Link to='/remover-colaborador'>Remover Colaborador</Link>
      <Link to='/remover-epi'>Remover EPI</Link>
    </div>
  )
}

export default Home
