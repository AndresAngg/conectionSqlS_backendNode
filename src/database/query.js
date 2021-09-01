export const querys = {
    getAllBooks: 'SELECT * FROM libro',
    booksCreate: 'INSERT INTO libro (titulo, autor, years, genero, editor, pais) VALUES (@titulo, @autor, @years, @genero, @editor, @pais)',
    getBookById: 'SELECT * FROM libro WHERE id = @id',
    deleteBook: 'DELETE FROM libro WHERE id = @id',
    updateBook: 'UPDATE libro SET titulo = @titulo, autor = @autor, years = @years, genero = @genero, editor = @editor, pais = @pais WHERE id = @id'
}
