// controllers/episController.js
const database = require('../Database')

exports.cadastrarEPI = async (req, res) => {
  const { nome, quantidade, codigo } = req.body
  try {
    const query =
      'INSERT INTO epis (nome, quantidade, codigo) VALUES ($1, $2, $3)'
    await database.query(query, [nome, quantidade, codigo])
    res.status(201).json({ message: 'EPI adicionado com sucesso.' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro ao adicionar EPI.' })
  }
}

exports.listarEPIs = async (req, res) => {
  try {
    const query = 'SELECT * FROM epis'
    const result = await database.query(query)
    res.status(200).json({ epis: result.rows })
  } catch (error) {
    console.error('Erro ao listar EPIs:', error)
    res
      .status(500)
      .json({
        status: 'Erro ao listar EPIs. Por favor, tente novamente mais tarde.',
      })
  }
}

exports.removerEPI = async (req, res) => {
  const { id } = req.params
  try {
    const query = 'DELETE FROM epis WHERE id = $1'
    await database.query(query, [id])
    res.status(200).json({ message: 'EPI removido com sucesso.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao remover EPI.' })
  }
}
