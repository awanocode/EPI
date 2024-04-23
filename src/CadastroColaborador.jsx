import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function CadastroColaborador() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [setor, setSetor] = useState('')
  const [resultado, setResultado] = useState('')
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await cadastrarColaborador({ nome, cargo, setor }) // Call the controller

      if (response.success) {
        setResultado(response.message) // Display success message
        setNome('')
        setCargo('')
        setSetor('')
        history.push('/listar-colaboradores') // Redirect to collaborator list
      } else {
        setResultado(response.message) // Display error message from controller
      }
    } catch (error) {
      console.error('Erro ao cadastrar colaborador:', error)
      setResultado('Erro ao cadastrar colaborador. Tente novamente.')
    }
  }

  return (
    <div className='cadastro-colaborador'>
      <h1>Cadastro de Colaborador</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nome'>Nome do Colaborador:</label>
          <input
            type='text'
            id='nome'
            name='nome'
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='cargo'>Cargo:</label>
          <input
            type='text'
            id='cargo'
            name='cargo'
            value={cargo}
            onChange={(event) => setCargo(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='setor'>Setor:</label>
          <input
            type='text'
            id='setor'
            name='setor'
            value={setor}
            onChange={(event) => setSetor(event.target.value)}
            required
          />
        </div>
        <button type='submit'>Cadastrar Colaborador</button>
      </form>
      <div className='resultado'>{resultado}</div>
    </div>
  )
}

export default CadastroColaborador
