import React, { useState } from 'react'

function RemoverEPI() {
  const [id, setId] = useState('')
  const [resultado, setResultado] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`/epis/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()

      setResultado(data.message)
      setId('')
    } catch (error) {
      console.error('Erro ao remover EPI:', error)
      setResultado('Erro ao remover EPI. Tente novamente.')
    }
  }

  return (
    <div className='remover-epi'>
      <h1>Remover EPI</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='id'>ID do EPI:</label>
          <input
            type='number'
            id='id'
            name='id'
            value={id}
            onChange={(event) => setId(parseInt(event.target.value))}
            required
          />
        </div>
        <button type='submit'>Remover EPI</button>
      </form>
      <div className='resultado'>{resultado}</div>
    </div>
  )
}

export default RemoverEPI
