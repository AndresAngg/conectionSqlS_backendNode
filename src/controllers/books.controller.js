import { getConnection, sql } from '../database/connection'



export const getBooks = async (req, res) => {
    const pool = await getConnection();
    const consulta = await pool.request().query('SELECT * FROM libro')
    console.log(consulta)
    res.send(consulta.recordset)
}

export const createBook = async (req, res) => {
    try {
        const { titulo, autor, years, genero, editor, pais } = req.body

        if (titulo == null || autor == null || years == null || genero == null || editor == null || pais == null) {
            console.error('No llenaste todos los campos')
            return res.status(400).json({ message: 'Porfa llena los campos' })
        } else {
            const pool = await getConnection();
            await pool.request()
            .input("titulo", sql.VarChar, titulo)
            .input("autor", sql.VarChar, autor)
            .input("years", sql.Int, years)
            .input("genero", sql.VarChar, genero)
            .input("editor", sql.VarChar, editor)
            .input("pais", sql.VarChar, pais)
            .query('INSERT INTO libro (titulo, autor, years, genero, editor, pais) VALUES (@titulo, @autor, @years, @genero, @editor, @pais)')
            res.json({
                message: 'El libro se añadió correctamente',

                body: {
                    book: { titulo, autor, years, genero, editor, pais }
                }
            })
      }
    } catch (error) {
        console.log(error)
    }
}