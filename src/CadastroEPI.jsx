import React, { useState } from 'react'

function CadastroEPI() {
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [codigo, setCodigo] = useState('')
  const [resultado, setResultado] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('/epis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          quantidade,
          codigo,
        }),
      })
      const data = await response.json()

      setResultado(data.message)
      setNome('')
      setQuantidade(0)
      setCodigo('')
    } catch (error) {
      console.error('Erro ao cadastrar EPI:', error)
      setResultado('Erro ao cadastrar EPI. Tente novamente.')
    }
  }

  return (
    <div className='cadastro-epi'>
      <h1>Cadastro de EPIs</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nome'>Nome do EPI:</label>
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
          <label htmlFor='quantidade'>Quantidade:</label>
          <input
            type='number'
            id='quantidade'
            name='quantidade'
            value={quantidade}
            onChange={(event) => setQuantidade(parseInt(event.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor='codigo'>Código:</label>
          <input
            type='text'
            id='codigo'
            name='codigo'
            value={codigo}
            onChange={(event) => setCodigo(event.target.value)}
            required
          />
        </div>
        <button type='submit'>Cadastrar EPI</button>
      </form>
      <div className='resultado'>{resultado}</div>
    </div>
  )
}

export default CadastroEPI
