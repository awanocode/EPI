import React, { useState } from 'react'

function RemoverColaborador() {
  const [id, setId] = useState('')
  const [resultado, setResultado] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`/colaboradores/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()

      setResultado(data.status)
      setId('')
    } catch (error) {
      console.error('Erro ao remover colaborador:', error)
      setResultado('Erro ao remover colaborador. Tente novamente.')
    }
  }

  return (
    <div className='remover-colaborador'>
      <h1>Remover Colaborador</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='id'>ID do Colaborador:</label>
          <input
            type='number'
            id='id'
            name='id'
            value={id}
            onChange={(event) => setId(parseInt(event.target.value))}
            required
          />
        </div>
        <button type='submit'>Remover Colaborador</button>
      </form>
      <div className='resultado'>{resultado}</div>
    </div>
  )
}

export default RemoverColaborador
