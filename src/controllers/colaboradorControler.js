const { query } = require('../database')

exports.cadastrarColaborador = async (req, res) => {
  const { nome, cargo, setor } = req.body

  try {
    const query = `INSERT INTO colaboradores (nome, cargo, setor) VALUES ($1, $2, $3)`
    const resultado = await query(query, [nome, cargo, setor])
    res.status(201).json({ message: 'Colaborador cadastrado com sucesso.' })
  } catch (error) {
    console.error('Erro ao cadastrar colaborador:', error)
    res.status(500).json({ message: 'Erro ao cadastrar colaborador.' })
  }
}

exports.listarColaboradores = async (req, res) => {
  const query = 'SELECT * FROM colaboradores'

  try {
    const resultado = await query(query)
    res.status(200).json({ colaboradores: resultado })
  } catch (error) {
    console.error('Erro ao listar colaboradores:', error)
    res.status(500).json({ status: 'Erro ao listar colaboradores' })
  }
}

exports.removerColaborador = async (req, res) => {
  const { id } = req.params
  const query = `DELETE FROM colaboradores WHERE id = $1`

  try {
    await query(query, [id])
    res.status(200).json({ status: 'Colaborador removido com sucesso!' })
  } catch (error) {
    console.error('Erro ao remover colaborador:', error)
    res.status(500).json({ status: 'Erro ao remover colaborador' })
  }
}
