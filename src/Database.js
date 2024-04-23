const client = new Client({
  user: 'fqfkdyvy',
  password: 'PpVNHPIWLaV5RYTD2mhyPY9DuGWNYyc-',
  database: 'fqfkdyvy',
  host: 'kesavan.db.elephantsql.com',
  port: 5432,
})

export async function conectar() {
  await client.connect()
  console.log('Conectado ao banco de dados!')
}

export async function desconectar() {
  await client.end()
  console.log('Desconectado do banco de dados!')
}

export async function query(query, valores = []) {
  try {
    await conectar() // Conecta ao banco de dados antes da consulta
    const result = await client.query(query, valores)
    await desconectar() // Desconecta do banco de dados após a consulta
    return result.rows
  } catch (error) {
    console.error('Erro ao executar consulta:', error)
    throw error // Propaga o erro para ser tratado no controller
  }
}
