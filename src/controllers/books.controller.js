import { getConnection, sql, querys } from '../database'



export const getBooks = async (req, res) => {
    try {

        const pool = await getConnection();
        const consulta = await pool.request().query(querys.getAllBooks)
        console.log(consulta)
        res.send(consulta.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
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
                .query(querys.booksCreate)
            res.json({
                message: 'El libro se añadió correctamente',

                body: {
                    book: { titulo, autor, years, genero, editor, pais }
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500)

    }
}
export const showBook = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const consulta = await pool.request().input("id", sql.Int, id).query(querys.getBookById)
        console.error(consulta.recordset)
        res.json(consulta.recordset)
   
        
    } catch (err) {
        console.log(err)
        res.status(500)
    }
}

export const deleteBook = async (req, res) => {
    try { 
        const pool = await getConnection();
        const { id } = req.params
        const consulta = await pool.request().input("id", sql.Int, id).query(querys.deleteBook)
        res.json(consulta.recordset)

    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

export const updateBook = async (req, res) => {
    try{
        const { titulo, autor, years, genero, editor, pais } = req.body
        const { id } = req.params;
        if(titulo == null || autor == null || years == null || genero == null || editor == null || pais == null){

                console.error('No llenaste todos los campos')
                return res.status(400).json({ message: 'Porfa llena los campos' })
        }
        const pool = await getConnection();
        const consulta = await pool.request()
        .input("titulo", titulo)
        .input("autor", autor)
        .input("years", years)
        .input("genero", genero)
        .input("editor", editor)
        .input("pais", pais)
        .input("id", id)
        .query(querys.updateBook)
        
       return res.json({

            message: 'Se actualizó correctamente',
        })

    
    }catch(error){
        console.log(error)
        res.status(500)
    }
}
